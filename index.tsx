
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as XLSX from 'https://esm.sh/xlsx';
import { Session, SessionType, SessionResource } from './types';
import { MASTER_SESSIONS } from './constants';
import SessionCard from './components/SessionCard';
import SessionDialog from './components/SessionDialog';
import {
  Download, Upload, Plus, Calendar, Filter, Search,
  ListTodo, LayoutDashboard, Clock, Mail, Heart, Star, MapPin, Table,
  Loader2, User as UserIcon
} from 'lucide-react';

const timeToMinutes = (timeStr: string) => {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
};

const PIXELS_PER_MINUTE = 3.5;
const DAY_START_MINUTES = 8 * 60;
const DAY_END_MINUTES = 17 * 60 + 30;
const COLUMN_WIDTH = 300;
const TIME_COL_WIDTH = 110;

import AdminDashboard from './components/AdminDashboard';
import { supabase, UserSchedule, fetchSessionResources, getSessionKey } from './lib/supabase';
import Auth from './components/Auth';
import { User } from '@supabase/supabase-js';

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

  const gridScrollRef = useRef<HTMLDivElement>(null);
  const timeColumnRef = useRef<HTMLDivElement>(null);

  // Base master sessions (static)
  // We keep the master list separate from user state to avoid complex merging issues
  // We keep the master list separate from user state to avoid complex merging issues
  const [userSchedules, setUserSchedules] = useState<Record<string, { isSelected: boolean, isInterested: boolean }>>({});
  const [resources, setResources] = useState<Record<string, SessionResource>>({});

  const [selectedDay, setSelectedDay] = useState<string>('Sunday');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<SessionType | 'All' | 'Priority' | 'Interested'>('All');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'browse' | 'my-plan' | 'admin'>('browse');

  const adminEmails = (import.meta.env.VITE_ADMIN_EMAIL || '').split(',').map((email: string) => email.trim());
  const isAdmin = user?.email && adminEmails.includes(user.email);

  const days = ['Sunday', 'Monday', 'Tuesday'];
  const sessionTypes: (SessionType | 'All' | 'Priority' | 'Interested')[] = [
    'All', 'Priority', 'Interested', 'KeyNote', 'Featured Session', 'Exhibitor Big Ideas', 'AI Stage', 'Ask the Speaker'
  ];

  // Initialize Auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoadingSession(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch User Data when User changes
  useEffect(() => {
    if (!user) {
      setUserSchedules({});
      return;
    }

    const fetchData = async () => {
      const [scheduleData, resourceData] = await Promise.all([
        supabase
          .from('user_schedules')
          .select('session_id, is_selected, is_interested')
          .eq('user_id', user.id),
        fetchSessionResources()
      ]);

      const { data, error } = scheduleData;
      setResources(resourceData);

      if (error) {
        console.error('Error fetching schedules:', error);
        return;
      }

      if (data) {
        const scheduleMap: Record<string, { isSelected: boolean, isInterested: boolean }> = {};
        data.forEach((s: any) => {
          scheduleMap[s.session_id] = {
            isSelected: s.is_selected,
            isInterested: s.is_interested
          };
        });
        setUserSchedules(scheduleMap);
      }
    };

    fetchData();
  }, [user]);

  // Derived state: Merge Master Sessions with User Preferences
  const sessions = useMemo(() => {
    return MASTER_SESSIONS.map(s => ({
      ...s,
      isSelected: userSchedules[s.id]?.isSelected ?? false,
      isInterested: userSchedules[s.id]?.isInterested ?? false
    }));
  }, [userSchedules]);

  const handleGridScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (timeColumnRef.current) {
      timeColumnRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const updateUserSchedule = async (sessionId: string, updates: Partial<{ isSelected: boolean, isInterested: boolean }>) => {
    if (!user) return;

    // Optimistic Update
    setUserSchedules(prev => {
      const current = prev[sessionId] || { isSelected: false, isInterested: false };
      return {
        ...prev,
        [sessionId]: { ...current, ...updates }
      };
    });

    // DB Update
    const current = userSchedules[sessionId] || { isSelected: false, isInterested: false };
    const newState = { ...current, ...updates };

    const { error } = await supabase
      .from('user_schedules')
      .upsert({
        user_id: user.id,
        session_id: sessionId,
        is_selected: newState.isSelected,
        is_interested: newState.isInterested,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id, session_id' });

    if (error) {
      console.error('Error updating schedule:', error);
      // Revert optimism if needed (complex implementation omitted for brevity)
    }
  };

  const toggleMustGo = (id: string) => {
    const current = userSchedules[id]?.isSelected ?? false;
    updateUserSchedule(id, { isSelected: !current });
  };

  const toggleInterested = (id: string) => {
    const current = userSchedules[id]?.isInterested ?? false;
    updateUserSchedule(id, { isInterested: !current });
  };

  const addManualSession = (newSession: Session) => {
    // For manual sessions, we might just store them locally for now or need a new table
    // Simplification: We only support prioritizing existing sessions for the DB refactor currently
    alert("Custom sessions are currently limited to local session only in this version.");
    // setSessions(prev => [...prev, newSession]); 
  };

  const scrollToVenue = (location: string) => {
    if (!gridScrollRef.current) return;
    const targetColumn = gridScrollRef.current.querySelector(`[data-location="${location}"]`);
    if (targetColumn) {
      targetColumn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  // ... Exports (JSON/Excel/Email) use `sessions` which is already merged
  const handleExportExcel = () => {
    const myPlan = sessions.filter(s => s.isSelected || s.isInterested);
    if (myPlan.length === 0) {
      alert('エクスポートするセッションがありません。My Planに追加してください。');
      return;
    }

    const wb = XLSX.utils.book_new();
    const timeLabels = [];
    for (let m = DAY_START_MINUTES; m <= DAY_END_MINUTES; m += 30) {
      const h = Math.floor(m / 60).toString().padStart(2, '0');
      const min = (m % 60).toString().padStart(2, '0');
      timeLabels.push(`${h}:${min}`);
    }

    days.forEach(dayName => {
      const daySessions = myPlan.filter(s => s.day === dayName);
      const dayLocations = Array.from(new Set(daySessions.map(s => s.location || 'Unassigned Venue')));

      const matrix = [];
      const header = ["Time", ...dayLocations];
      matrix.push(header);

      timeLabels.forEach(time => {
        const row = [time];
        dayLocations.forEach(loc => {
          const matched = daySessions.find(s => {
            const start = timeToMinutes(s.time_start);
            const end = timeToMinutes(s.time_end);
            const current = timeToMinutes(time);
            return (s.location || 'Unassigned Venue') === loc && current >= start && current < end;
          });
          row.push(matched ? (matched.isSelected ? `[★] ${matched.title}` : `[❤] ${matched.title}`) : "");
        });
        matrix.push(row);
      });

      const ws = XLSX.utils.aoa_to_sheet(matrix);
      XLSX.utils.book_append_sheet(wb, ws, dayName);
    });

    XLSX.writeFile(wb, "NRF2026_MySchedule_Grid.xlsx");
  };



  const handleEmailShare = (e: React.MouseEvent) => {
    e.preventDefault();
    const selected = sessions.filter(s => s.isSelected || s.isInterested);
    if (selected.length === 0) {
      alert('共有するセッションがありません。');
      return;
    }

    const grouped = selected.reduce((acc, s) => {
      if (!acc[s.day]) acc[s.day] = [];
      acc[s.day].push(s);
      return acc;
    }, {} as Record<string, Session[]>);

    let body = "NRF 2026 My Session Schedule:\n\n";

    days.forEach(day => {
      if (grouped[day]) {
        body += `[ ${day.toUpperCase()} ]\n`;
        grouped[day].sort((a, b) => a.time_start.localeCompare(b.time_start)).forEach(s => {
          const status = s.isSelected ? "[MUST GO ⭐]" : "[INTERESTED ❤️]";
          body += `${status} ${s.time_start} - ${s.time_end} | ${s.title}\n`;
          body += `  Venue: ${s.location || 'Exhibition Hall'}\n\n`;
        });
      }
    });

    body += "\nSent from NRF 2026 Session Planner";
    const subject = encodeURIComponent("My NRF 2026 Schedule");
    const mailtoLink = `mailto:?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert('Supabase integration currently overrides local import. Please use cloud sync.');
    // Future: parse JSON and upsert to Supabase
  };

  const filteredSessions = useMemo(() => {
    let base = sessions;
    if (viewMode === 'my-plan') {
      base = base.filter(s => s.isSelected || s.isInterested);
    }

    return base.filter(s => {
      const matchesDay = s.day === selectedDay;
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.location?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (s.speakers?.some(sp => sp.name.toLowerCase().includes(searchQuery.toLowerCase()) || sp.company.toLowerCase().includes(searchQuery.toLowerCase())));

      let matchesType = true;
      if (filterType === 'Priority') {
        matchesType = !!s.isSelected;
      } else if (filterType === 'Interested') {
        matchesType = !!s.isInterested;
      } else if (filterType !== 'All') {
        matchesType = s.type === filterType;
      }

      return matchesDay && matchesSearch && matchesType;
    });
  }, [sessions, selectedDay, searchQuery, filterType, viewMode]);

  const locations = useMemo(() => {
    const locs: string[] = Array.from(new Set(filteredSessions.map(s => s.location || 'Unknown Venue')));
    return locs.sort((a, b) => {
      const aIsMain = a.includes('Main');
      const bIsMain = b.includes('Main');
      if (aIsMain && !bIsMain) return -1;
      if (!aIsMain && bIsMain) return 1;
      const aIsJavits = a.includes('Javits');
      const bIsJavits = b.includes('Javits');
      if (aIsJavits && !bIsJavits) return -1;
      if (!aIsJavits && bIsJavits) return 1;
      return a.localeCompare(b);
    });
  }, [filteredSessions]);

  const starredTimeRanges = useMemo(() => {
    return sessions
      .filter(s => s.day === selectedDay && s.isSelected)
      .map(s => {
        const startMin = timeToMinutes(s.time_start);
        const endMin = timeToMinutes(s.time_end);
        return {
          id: s.id,
          top: (startMin - DAY_START_MINUTES) * PIXELS_PER_MINUTE,
          height: (endMin - startMin) * PIXELS_PER_MINUTE
        };
      });
  }, [sessions, selectedDay]);

  const timeMarkers = useMemo(() => {
    const markers = [];
    for (let m = DAY_START_MINUTES; m <= DAY_END_MINUTES; m += 30) {
      const h = Math.floor(m / 60);
      const min = m % 60;
      markers.push(`${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
    }
    return markers;
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setViewMode('browse');
  };

  if (loadingSession) {
    return <div className="h-screen flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;
  }

  if (!user) {
    return <Auth />;
  }

  if (viewMode === 'admin' && isAdmin) {
    return <AdminDashboard onBack={() => setViewMode('browse')} />;
  }

  const mustGoCount = sessions.filter(s => s.isSelected).length;
  const interestedCount = sessions.filter(s => s.isInterested).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-indigo-100 flex flex-col h-screen overflow-hidden">
      <header className="z-[150] bg-white border-b border-slate-200 px-6 py-4 shadow-sm shrink-0">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-200">
              <Calendar className="text-white" size={24} />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase leading-none">NRF 2026 Scheduler</h1>
                <span className="text-[10px] font-medium text-slate-400">App developed by T.Hamuro 2026</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">Cloud Plan ({user.email})</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  {mustGoCount} Must ⭐ / {interestedCount} Interested ❤️
                </span>
                <button onClick={handleLogout} className="text-[9px] text-red-500 hover:text-red-600 font-bold uppercase underline ml-2">Logout</button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* ... Buttons ... */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button onClick={() => setViewMode('browse')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black transition-all ${viewMode === 'browse' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}><LayoutDashboard size={14} /> BROWSE</button>
              <button onClick={() => setViewMode('my-plan')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black transition-all ${viewMode === 'my-plan' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}><ListTodo size={14} /> MY PLAN ({mustGoCount + interestedCount})</button>
            </div>

            {isAdmin && (
              <button onClick={() => setViewMode('admin')} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-black hover:bg-slate-900 transition-all shadow-md"><UserIcon size={14} /> ADMIN</button>
            )}

            <button onClick={handleEmailShare} className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-black hover:bg-indigo-700 transition-all active:scale-95 shadow-md"><Mail size={14} /> SHARE</button>

            <div className="flex gap-2">
              <button onClick={handleExportExcel} className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-black hover:bg-emerald-700 transition-all shadow-md active:scale-95"><Table size={14} /> SCHEDULE</button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* ... Search and Filters ... */}
        <div className="flex flex-col gap-4 mb-4 shrink-0 z-[100]">
          {/* Layout Change: Single row on iPad+, Search takes priority, buttons scrollable */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative min-w-[200px] md:min-w-[300px] shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search sessions..." className="w-full pl-12 pr-6 py-3.5 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-indigo-500 outline-none transition-all text-sm font-bold" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            {/* Days - Keep visible */}
            <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto no-scrollbar shrink-0">
              {days.map(day => (<button key={day} onClick={() => setSelectedDay(day)} className={`px-6 py-3 rounded-xl text-xs font-black transition-all whitespace-nowrap ${selectedDay === day ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>{day.toUpperCase()}</button>))}
            </div>
            {/* Filters - Allow cutoff if needed */}
            <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto no-scrollbar min-w-0">
              {sessionTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-3 rounded-xl text-[10px] font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${filterType === type ? 'bg-indigo-100 text-indigo-700' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {type === 'Priority' && <Star size={10} className="fill-current" />}
                  {type === 'Interested' && <Heart size={10} className="fill-current" />}
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth no-scrollbar">
            <div className="flex items-center gap-1.5 bg-indigo-50/50 px-3 py-2 rounded-xl border border-indigo-100 min-w-max">
              <MapPin size={12} className="text-indigo-600" />
              <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest mr-2">Jump to Venue:</span>
              {locations.map(loc => (
                <button
                  key={loc}
                  onClick={() => scrollToVenue(loc)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[9px] font-black text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-sm"
                >
                  {loc.replace('Exhibitor Big Ideas Stage', 'Stage').replace('Javits North, Level 4,', '').trim()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ... Grid ... */}
        <div className="flex-1 flex bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden relative">

          {/* 時刻目盛り */}
          <div className="flex flex-col shrink-0 border-r border-slate-200 bg-slate-50 z-[120]" style={{ width: `${TIME_COL_WIDTH}px` }}>
            <div className="h-16 flex items-center justify-center bg-slate-100 border-b border-slate-200">
              <Clock size={16} className="text-slate-400" />
            </div>
            <div ref={timeColumnRef} className="flex-1 overflow-hidden pointer-events-none">
              <div className="relative" style={{ height: `${(timeMarkers.length) * 30 * PIXELS_PER_MINUTE}px` }}>
                {timeMarkers.map(time => {
                  const timeInMin = timeToMinutes(time);
                  const isBusy = starredTimeRanges.some(r => {
                    const topMin = r.top / PIXELS_PER_MINUTE + DAY_START_MINUTES;
                    const bottomMin = (r.top + r.height) / PIXELS_PER_MINUTE + DAY_START_MINUTES;
                    return timeInMin >= topMin && timeInMin < bottomMin;
                  });

                  return (
                    <div
                      key={time}
                      className={`relative flex flex-col justify-start px-3 border-b border-slate-200/50 transition-colors duration-300 ${isBusy ? 'bg-amber-100/40' : ''}`}
                      style={{ height: `${30 * PIXELS_PER_MINUTE}px` }}
                    >
                      {isBusy && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500 shadow-[2px_0_10px_rgba(245,158,11,0.4)]" />}
                      <div className="flex items-center justify-between absolute top-0 left-3 right-3 transform -translate-y-1/2">
                        <span className={`text-[12px] font-black tabular-nums tracking-tighter bg-slate-50 px-1.5 rounded-full ${isBusy ? 'text-amber-700' : 'text-slate-400'}`}>{time}</span>
                        {isBusy && <Star size={12} className="text-amber-500 fill-amber-500 shrink-0 ml-1" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Grid Scroll */}
          <div
            ref={gridScrollRef}
            onScroll={handleGridScroll}
            className="flex-1 overflow-auto relative scroll-smooth scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent z-10"
          >
            <div className="min-w-max relative">
              <div className="sticky top-0 z-[115] flex bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
                {locations.map((location) => (
                  <div
                    key={location}
                    data-location={location}
                    className="h-16 flex items-center justify-center px-4 border-r border-slate-100 bg-white/50"
                    style={{ width: `${COLUMN_WIDTH}px` }}
                  >
                    <h3 className="text-[10px] font-black text-slate-800 text-center uppercase tracking-widest leading-tight">{location}</h3>
                  </div>
                ))}
              </div>

              <div className="flex relative">
                <div className="absolute inset-0 pointer-events-none z-[5]">
                  {starredTimeRanges.map(range => (
                    <div
                      key={range.id}
                      className="absolute left-0 w-full bg-amber-100/30 border-y border-amber-200/50 backdrop-blur-[1px]"
                      style={{ top: `${range.top}px`, height: `${range.height}px` }}
                    />
                  ))}
                </div>

                {locations.map((location, colIdx) => (
                  <div
                    key={location}
                    className="relative border-r border-slate-100 group/column hover:z-[110]"
                    style={{ width: `${COLUMN_WIDTH}px`, height: `${(timeMarkers.length) * 30 * PIXELS_PER_MINUTE}px` }}
                  >
                    {timeMarkers.map((_, i) => (
                      <div key={i} className="absolute left-0 right-0 border-b border-slate-200/30" style={{ top: `${i * 30 * PIXELS_PER_MINUTE}px`, height: `${30 * PIXELS_PER_MINUTE}px` }} />
                    ))}

                    {filteredSessions.filter(s => (s.location || 'Unknown Venue') === location).map(session => {
                      const startMin = timeToMinutes(session.time_start);
                      const endMin = timeToMinutes(session.time_end);
                      const duration = endMin - startMin;
                      const top = (startMin - DAY_START_MINUTES) * PIXELS_PER_MINUTE;
                      const height = Math.max(duration * PIXELS_PER_MINUTE, 45);

                      return (
                        <div
                          key={session.id}
                          className="absolute left-2 right-2 transition-all duration-300 z-10 hover:z-[120]"
                          style={{ top: `${top}px`, height: `${height}px` }}
                        >
                          <SessionCard
                            session={session}
                            onToggle={toggleMustGo}
                            onToggleInterested={toggleInterested}
                            isSelected={!!session.isSelected}
                            isInterested={!!session.isInterested}
                            compact={duration <= 30}
                            columnIndex={colIdx}
                            totalColumns={locations.length}
                            resource={resources[getSessionKey(session)]}
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {locations.length === 0 && (
              <div className="sticky left-0 right-0 top-32 flex flex-col items-center justify-center py-40 bg-white/80">
                <p className="text-xl font-black text-slate-300 uppercase italic tracking-widest">No matching sessions found</p>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
