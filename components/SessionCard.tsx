
import React from 'react';
import { Session, SessionType } from '../types';
import { Clock, Star, MapPin, Sparkles, Utensils, MessageCircle, Ticket, GlassWater, Zap, Info, Heart } from 'lucide-react';

interface SessionCardProps {
  session: Session;
  onToggle: (id: string) => void;
  onToggleInterested?: (id: string) => void;
  isSelected: boolean;
  isInterested?: boolean;
  hasConflict?: boolean;
  compact?: boolean;
  columnIndex?: number;
  totalColumns?: number;
}

const SessionCard: React.FC<SessionCardProps> = ({
  session, onToggle, onToggleInterested, isSelected, isInterested, compact, columnIndex = 0, totalColumns = 1
}) => {
  const typeStyles: Record<string, string> = {
    'KeyNote': 'bg-indigo-700 text-white border-indigo-900',
    'Featured Session': 'bg-teal-600 text-white border-teal-800',
    'Exhibitor Big Ideas': 'bg-amber-500 text-white border-amber-700',
    'AI Stage': 'bg-fuchsia-600 text-white border-fuchsia-800',
    'Foodservice Tech': 'bg-orange-500 text-white border-orange-700',
    'Special Program': 'bg-slate-700 text-white border-slate-900',
    'Networking Event': 'bg-rose-500 text-white border-rose-700',
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'AI Stage': return <Zap size={10} />;
      case 'Foodservice Tech': return <Utensils size={10} />;
      case 'Special Program': return <Ticket size={10} />;
      case 'Networking Event': return <GlassWater size={10} />;
      case 'KeyNote': return <Sparkles size={10} />;
      default: return null;
    }
  };

  const showOnLeft = columnIndex > (totalColumns / 2);

  const tooltipPositionClass = showOnLeft
    ? 'right-[calc(100%+20px)] left-auto'
    : 'left-[calc(100%+20px)] right-auto';

  const containerClass = `
    group/card relative flex flex-col h-full p-2.5 md:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none
    ${isSelected
      ? 'border-indigo-600 bg-white shadow-xl ring-2 ring-indigo-500/20'
      : isInterested
        ? 'border-rose-200 bg-white shadow-sm'
        : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-md'
    }
  `;

  return (
    <div className={containerClass} onClick={() => onToggle(session.id)}>
      <div className="flex justify-between items-start gap-1 mb-1.5 overflow-hidden">
        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[7px] md:text-[8px] font-black rounded-md uppercase tracking-tighter border shrink-0 ${typeStyles[session.type] || 'bg-slate-500 text-white'}`}>
          {getIcon(session.type)}
          {session.type}
        </span>

        <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleInterested?.(session.id); }}
            className={`transition-all hover:scale-125 ${isInterested ? 'text-rose-500' : 'text-slate-200 hover:text-rose-300'}`}
          >
            <Heart size={16} fill={isInterested ? "currentColor" : "none"} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onToggle(session.id); }}
            className={`transition-all hover:scale-125 ${isSelected ? 'text-amber-500' : 'text-slate-200 hover:text-amber-400'}`}
          >
            <Star size={16} fill={isSelected ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      <h3 className={`font-black leading-tight line-clamp-2 mb-1.5 text-[12px] ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
        {session.title}
      </h3>

      {!compact && (
        <div className="flex items-center text-slate-500 text-[9px] font-bold mt-auto pt-1.5 border-t border-slate-100/50">
          <Clock size={10} className={`mr-1 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
          {session.time_start} - {session.time_end}
        </div>
      )}

      {/* 詳細パネル - Z-index制御の要。絶対に最前面に来るよう bg-slate-900 (不透明) を指定 */}
      <div className={`absolute top-0 w-80 bg-slate-900 text-white p-6 rounded-3xl shadow-[0_40px_100px_-10px_rgba(0,0,0,1)] opacity-0 pointer-events-none group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 z-[1000] border border-white/20 ${tooltipPositionClass} ${showOnLeft ? 'translate-x-4' : '-translate-x-4'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-500/40 rounded-lg">
              <Info size={14} className="text-indigo-300" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">SESSION OVERVIEW</span>
          </div>
          <div className="flex gap-2">
            {isSelected && <Star size={14} className="text-amber-400 fill-amber-400" />}
            {isInterested && <Heart size={14} className="text-rose-400 fill-rose-400" />}
          </div>
        </div>

        <h4 className="text-sm md:text-base font-black leading-snug mb-5 text-white">{session.title}</h4>

        <div className="space-y-4">
          {session.speakers && session.speakers.length > 0 && (
            <div className="pb-4 mb-2 border-b border-white/10">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-3">Featured Speakers</span>
              <div className="space-y-3">
                {session.speakers.map((sp, i) => (
                  <div key={i} className="group/sp">
                    <p className="text-xs font-black text-white group-hover/sp:text-indigo-300 transition-colors">{sp.name}</p>
                    <p className="text-[10px] text-slate-400 leading-tight font-medium">{sp.title}</p>
                    <p className="text-[10px] text-indigo-400/80 font-black tracking-tight">{sp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-start gap-4">
            <div className="mt-1 p-1 bg-white/10 rounded"><Clock size={14} className="text-indigo-400" /></div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Schedule</span>
              <span className="text-xs font-bold">{session.day}, {session.time_start} — {session.time_end}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 p-1 bg-white/10 rounded"><MapPin size={14} className="text-indigo-400" /></div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Location</span>
              <span className="text-xs font-bold leading-tight">{session.location || 'Exhibition Hall'}</span>
            </div>
          </div>
        </div>
        <div className={`absolute top-6 w-3 h-3 bg-slate-900 border-t border-l border-white/20 rotate-45 ${showOnLeft ? '-right-1.5 rotate-[135deg]' : '-left-1.5 -rotate-45'}`}></div>
      </div>
    </div>
  );
};

export default SessionCard;
