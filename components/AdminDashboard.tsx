import React, { useEffect, useState, useMemo, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { MASTER_SESSIONS } from '../constants';
import { Download, Search, User, ArrowLeft, Loader2, Calendar, Star, Heart, Clock, MapPin, ChevronDown } from 'lucide-react';
import SessionCard from './SessionCard';
import * as XLSX from 'https://esm.sh/xlsx';

// Constants reused from index.tsx
const PIXELS_PER_MINUTE = 3.5;
const DAY_START_MINUTES = 8 * 60;
const DAY_END_MINUTES = 17 * 60 + 30;
const COLUMN_WIDTH = 300;
const TIME_COL_WIDTH = 110;

const timeToMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
};

type UserScheduleRow = {
    email: string;
    session_id: string;
    is_selected: boolean;
    is_interested: boolean;
    updated_at: string;
};

const AdminDashboard = ({ onBack }: { onBack: () => void }) => {
    const [loading, setLoading] = useState(true);
    const [rawData, setRawData] = useState<UserScheduleRow[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Admin UI State
    const [selectedUserEmail, setSelectedUserEmail] = useState<string>('');
    const [selectedDay, setSelectedDay] = useState<string>('Sunday');

    const gridScrollRef = useRef<HTMLDivElement>(null);
    const timeColumnRef = useRef<HTMLDivElement>(null);

    const days = ['Sunday', 'Monday', 'Tuesday'];

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const { data, error } = await supabase.rpc('get_all_user_schedules');
                if (error) throw error;
                setRawData(data || []);
            } catch (err: any) {
                console.error('Admin fetch error:', err);
                setError(err.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, []);

    // Unique Users List
    const users = useMemo(() => {
        const emails = Array.from(new Set(rawData.map(r => r.email))).sort();
        return emails;
    }, [rawData]);

    // Auto-select first user if none selected
    useEffect(() => {
        if (!selectedUserEmail && users.length > 0) {
            setSelectedUserEmail(users[0]);
        }
    }, [users, selectedUserEmail]);

    // Merge Master Sessions with Selected User's Data
    const userSessions = useMemo(() => {
        if (!selectedUserEmail) return [];

        const userScheduleMap: Record<string, { isSelected: boolean, isInterested: boolean }> = {};
        rawData
            .filter(r => r.email === selectedUserEmail)
            .forEach(r => {
                userScheduleMap[r.session_id] = {
                    isSelected: r.is_selected,
                    isInterested: r.is_interested
                };
            });

        return MASTER_SESSIONS.map(s => ({
            ...s,
            isSelected: userScheduleMap[s.id]?.isSelected ?? false,
            isInterested: userScheduleMap[s.id]?.isInterested ?? false
        }));
    }, [selectedUserEmail, rawData]);

    // Filtering for Grid
    const filteredSessions = useMemo(() => {
        return userSessions.filter(s => s.day === selectedDay);
    }, [userSessions, selectedDay]);

    // Locations for Columns
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

    const timeMarkers = useMemo(() => {
        const markers = [];
        for (let m = DAY_START_MINUTES; m <= DAY_END_MINUTES; m += 30) {
            const h = Math.floor(m / 60);
            const min = m % 60;
            markers.push(`${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
        }
        return markers;
    }, []);

    const handleGridScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (timeColumnRef.current) {
            timeColumnRef.current.scrollTop = e.currentTarget.scrollTop;
        }
    };

    const handleExportUser = () => {
        if (!selectedUserEmail) return;
        const myPlan = userSessions.filter(s => s.isSelected || s.isInterested);
        if (myPlan.length === 0) {
            alert("This user has no saved sessions.");
            return;
        }

        // Simple Excel Export for selected user
        const ws = XLSX.utils.json_to_sheet(myPlan.map(s => ({
            Day: s.day,
            Time: `${s.time_start} - ${s.time_end}`,
            Title: s.title,
            Location: s.location,
            Type: s.type,
            Status: s.isSelected ? 'MUST GO' : 'Interested'
        })));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "User Schedule");
        XLSX.writeFile(wb, `NRF2026_${selectedUserEmail}_Schedule.xlsx`);
    };

    if (loading) return <div className="h-full flex items-center justify-center"><Loader2 className="animate-spin text-indigo-600" /></div>;

    return (
        <div className="h-full flex flex-col bg-slate-50 overflow-hidden text-slate-900">
            {/* Admin Header */}
            <div className="bg-slate-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between shrink-0 gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                            <User size={18} /> Admin Dashboard
                        </h2>
                        <p className="text-xs text-slate-400">Vertical Schedule View</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select
                            value={selectedUserEmail}
                            onChange={e => setSelectedUserEmail(e.target.value)}
                            className="pl-9 pr-8 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer min-w-[250px]"
                        >
                            {users.length === 0 && <option value="">No users found</option>}
                            {users.map(u => <option key={u} value={u}>{u}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>

                    <button onClick={handleExportUser} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors">
                        <Download size={14} /> EXPORT USER
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col p-6 overflow-hidden">
                {/* Days Tab */}
                <div className="flex justify-start mb-4 shrink-0">
                    <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-100">
                        {days.map(day => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`px-6 py-3 rounded-xl text-xs font-black transition-all whitespace-nowrap ${selectedDay === day ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {day.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Container */}
                <div className="flex-1 flex bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden relative">
                    {/* Time Column */}
                    <div className="flex flex-col shrink-0 border-r border-slate-200 bg-slate-50 z-[120]" style={{ width: `${TIME_COL_WIDTH}px` }}>
                        <div className="h-16 flex items-center justify-center bg-slate-100 border-b border-slate-200">
                            <Clock size={16} className="text-slate-400" />
                        </div>
                        <div ref={timeColumnRef} className="flex-1 overflow-hidden pointer-events-none">
                            <div className="relative" style={{ height: `${(timeMarkers.length) * 30 * PIXELS_PER_MINUTE}px` }}>
                                {timeMarkers.map(time => {
                                    const timeInMin = timeToMinutes(time);
                                    const nextTimeInMin = timeInMin + 30;

                                    // Count active sessions in this slot for the selected user
                                    const activeInSlot = filteredSessions.filter(s => {
                                        if (!s.isSelected && !s.isInterested) return false;
                                        const start = timeToMinutes(s.time_start);
                                        const end = timeToMinutes(s.time_end);
                                        // Session covers this slot if it starts before slot ends and ends after slot starts
                                        return start < nextTimeInMin && end > timeInMin;
                                    });

                                    const starCount = activeInSlot.filter(s => s.isSelected).length;
                                    const heartCount = activeInSlot.filter(s => s.isInterested).length;

                                    return (
                                        <div
                                            key={time}
                                            className="relative flex flex-col justify-start px-3 border-b border-slate-200/50"
                                            style={{ height: `${30 * PIXELS_PER_MINUTE}px` }}
                                        >
                                            <div className="flex flex-col items-start gap-0.5 absolute top-0 left-3 right-1 transform -translate-y-2">
                                                <span className="text-[12px] font-black tabular-nums tracking-tighter bg-slate-50 px-1.5 rounded-full text-slate-400">{time}</span>
                                                {(starCount > 0 || heartCount > 0) && (
                                                    <div className="flex flex-col gap-0.5 ml-1">
                                                        {starCount > 0 && <span className="text-[9px] font-bold text-amber-500 bg-amber-50 px-1 rounded flex items-center gap-0.5">★ {starCount}</span>}
                                                        {heartCount > 0 && <span className="text-[9px] font-bold text-rose-500 bg-rose-50 px-1 rounded flex items-center gap-0.5">♥ {heartCount}</span>}
                                                    </div>
                                                )}
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
                            {/* Header Row */}
                            <div className="sticky top-0 z-[115] flex bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
                                {locations.map((location) => (
                                    <div
                                        key={location}
                                        className="h-16 flex items-center justify-center px-4 border-r border-slate-100 bg-white/50"
                                        style={{ width: `${COLUMN_WIDTH}px` }}
                                    >
                                        <h3 className="text-[10px] font-black text-slate-800 text-center uppercase tracking-widest leading-tight">{location}</h3>
                                    </div>
                                ))}
                            </div>

                            {/* Columns */}
                            <div className="flex relative">
                                {locations.map((location, colIdx) => (
                                    <div
                                        key={location}
                                        className="relative border-r border-slate-100 group/column hover:z-[110]"
                                        style={{ width: `${COLUMN_WIDTH}px`, height: `${(timeMarkers.length) * 30 * PIXELS_PER_MINUTE}px` }}
                                    >
                                        {/* Grid Lines */}
                                        {timeMarkers.map((_, i) => (
                                            <div key={i} className="absolute left-0 right-0 border-b border-slate-200/30" style={{ top: `${i * 30 * PIXELS_PER_MINUTE}px`, height: `${30 * PIXELS_PER_MINUTE}px` }} />
                                        ))}

                                        {/* Sessions */}
                                        {filteredSessions.filter(s => (s.location || 'Unknown Venue') === location).map(session => {
                                            const startMin = timeToMinutes(session.time_start);
                                            const endMin = timeToMinutes(session.time_end);
                                            const duration = endMin - startMin;
                                            const top = (startMin - DAY_START_MINUTES) * PIXELS_PER_MINUTE;
                                            const height = Math.max(duration * PIXELS_PER_MINUTE, 45);

                                            // Visual fading for non-selected sessions in admin view
                                            const isSelected = !!session.isSelected;
                                            const isInterested = !!session.isInterested;
                                            const isActive = isSelected || isInterested;

                                            return (
                                                <div
                                                    key={session.id}
                                                    className={`absolute left-2 right-2 transition-all duration-300 z-10 ${isActive ? 'opacity-100 z-[120]' : 'opacity-30 hover:opacity-100 grayscale hover:grayscale-0'}`}
                                                    style={{ top: `${top}px`, height: `${height}px` }}
                                                >
                                                    <SessionCard
                                                        session={session}
                                                        onToggle={() => { }} // Read-only in Admin
                                                        onToggleInterested={() => { }} // Read-only
                                                        isSelected={isSelected}
                                                        isInterested={isInterested}
                                                        compact={duration <= 30}
                                                        columnIndex={colIdx}
                                                        totalColumns={locations.length}
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
                                <p className="text-xl font-black text-slate-300 uppercase italic tracking-widest">No sessions found for this day/venue</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
