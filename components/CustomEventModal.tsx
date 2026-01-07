import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, Clock, Type, AlignLeft } from 'lucide-react';

type CustomEventModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (event: { title: string; description: string; time_start: string; time_end: string }) => void;
    onDelete?: () => void;
    initialData?: {
        title: string;
        description: string;
        time_start: string;
        time_end: string;
    } | null;
    defaultTime?: { start: string; end: string };
};

const CustomEventModal = ({ isOpen, onClose, onSave, onDelete, initialData, defaultTime }: CustomEventModalProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timeStart, setTimeStart] = useState('12:00');
    const [timeEnd, setTimeEnd] = useState('13:00');

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setTitle(initialData.title);
                setDescription(initialData.description || '');
                setTimeStart(initialData.time_start);
                setTimeEnd(initialData.time_end);
            } else {
                setTitle('');
                setDescription('');
                setTimeStart(defaultTime?.start || '09:00');
                setTimeEnd(defaultTime?.end || '10:00');
            }
        }
    }, [isOpen, initialData, defaultTime]);

    if (!isOpen) return null;

    const handleSave = () => {
        if (!title.trim()) return;
        onSave({ title, description, time_start: timeStart, time_end: timeEnd });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        {initialData ? 'Edit Event' : 'Add Custom Event'}
                    </h3>
                    <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    {/* Title */}
                    <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                            <Type size={14} /> Title
                        </label>
                        <input
                            autoFocus
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:font-normal"
                            placeholder="e.g. Lunch Meeting"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Time Range */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                                <Clock size={14} /> Start Time
                            </label>
                            <input
                                type="time"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                value={timeStart}
                                onChange={e => setTimeStart(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                                <Clock size={14} /> End Time
                            </label>
                            <input
                                type="time"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                value={timeEnd}
                                onChange={e => setTimeEnd(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                            <AlignLeft size={14} /> Description (Optional)
                        </label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                            placeholder="Additional notes..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        {initialData && onDelete && (
                            <button
                                onClick={() => { onDelete(); onClose(); }}
                                className="px-4 py-3 rounded-xl bg-rose-50 text-rose-600 font-bold hover:bg-rose-100 transition-colors flex items-center justify-center"
                            >
                                <Trash2 size={20} />
                            </button>
                        )}
                        <button
                            onClick={handleSave}
                            className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                        >
                            <Save size={18} />
                            SAVE EVENT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomEventModal;
