import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { MASTER_SESSIONS } from '../constants';
import { Download, Search, User, ArrowLeft, Loader2, Calendar, Star } from 'lucide-react';
import * as XLSX from 'https://esm.sh/xlsx';

type UserScheduleRow = {
    email: string;
    session_id: string;
    is_selected: boolean;
    is_interested: boolean;
    updated_at: string;
};

const AdminDashboard = ({ onBack }: { onBack: () => void }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<UserScheduleRow[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                // We call a Postgres function (RPC) that we will ask the user to create
                const { data, error } = await supabase.rpc('get_all_user_schedules');

                if (error) throw error;
                setData(data || []);
            } catch (err: any) {
                console.error('Admin fetch error:', err);
                setError(err.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, []);

    const enrichedData = useMemo(() => {
        return data.map(row => {
            const session = MASTER_SESSIONS.find(s => s.id === row.session_id);
            return {
                ...row,
                sessionTitle: session?.title || '(Unknown Session)',
                sessionTime: session ? `${session.day} ${session.time_start}-${session.time_end}` : '',
                location: session?.location || ''
            };
        });
    }, [data]);

    const filteredData = useMemo(() => {
        if (!searchQuery) return enrichedData;
        const lower = searchQuery.toLowerCase();
        return enrichedData.filter(d =>
            d.email.toLowerCase().includes(lower) ||
            d.sessionTitle.toLowerCase().includes(lower) ||
            d.session_id.toLowerCase().includes(lower)
        );
    }, [enrichedData, searchQuery]);

    const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(filteredData.map(d => ({
            Email: d.email,
            SessionID: d.session_id,
            Title: d.sessionTitle,
            Time: d.sessionTime,
            Location: d.location,
            Status: d.is_selected ? 'MUST GO' : 'Interested',
            Updated: new Date(d.updated_at).toLocaleString()
        })));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "User Schedules");
        XLSX.writeFile(wb, "NRF2026_Admin_Export.xlsx");
    };

    if (loading) return <div className="h-full flex items-center justify-center"><Loader2 className="animate-spin text-indigo-600" /></div>;

    return (
        <div className="h-full flex flex-col bg-slate-50 overflow-hidden">
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                            <User size={18} /> Admin Dashboard
                        </h2>
                        <p className="text-xs text-slate-400">Viewing all user registrations</p>
                    </div>
                </div>
                <button onClick={handleExport} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors">
                    <Download size={14} /> EXPORT CSV
                </button>
            </div>

            <div className="p-6 flex-1 flex flex-col overflow-hidden">
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-4 text-sm font-bold">
                        Error: {error}. Did you run the SQL script in Supabase?
                    </div>
                )}

                <div className="mb-4 relative shrink-0">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search by email, title, or session ID..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 transition-all font-medium"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="bg-white border border-slate-200 rounded-xl flex-1 overflow-auto shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 sticky top-0 z-10">
                            <tr>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">User</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">Type</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">Session</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((row, idx) => (
                                <tr key={`${row.session_id}-${row.email}-${idx}`} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 text-sm font-medium text-slate-700">{row.email}</td>
                                    <td className="p-4">
                                        {row.is_selected ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-[10px] font-bold uppercase">
                                                <Star size={10} className="fill-current" /> Must Go
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-100 text-pink-700 rounded text-[10px] font-bold uppercase">
                                                <Calendar size={10} className="fill-current" /> Interested
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="text-sm font-bold text-slate-800 line-clamp-1" title={row.sessionTitle}>{row.sessionTitle}</div>
                                        <div className="text-xs text-slate-400 mt-0.5">{row.location}</div>
                                    </td>
                                    <td className="p-4 text-xs font-mono text-slate-500 whitespace-nowrap">{row.sessionTime}</td>
                                </tr>
                            ))}
                            {filteredData.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-400 italic">No records found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
