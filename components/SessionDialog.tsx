
import React, { useState } from 'react';
import { Session, SessionType } from '../types';
import { X, Plus, Trash2, MapPin } from 'lucide-react';

interface SessionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (session: Session) => void;
}

const SessionDialog: React.FC<SessionDialogProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '2026-01-11',
    time_start: '09:00',
    time_end: '10:00',
    type: 'Featured Session' as SessionType,
    location: '',
  });

  const [speakers, setSpeakers] = useState<{name: string, title: string, company: string}[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) return;

    const newSession: Session = {
      ...formData,
      id: `manual-${Date.now()}`,
      day: new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long' }),
      speakers,
      isSelected: true,
    };
    onAdd(newSession);
    setFormData({
      title: '',
      date: '2026-01-11',
      time_start: '09:00',
      time_end: '10:00',
      type: 'Featured Session',
      location: '',
    });
    setSpeakers([]);
    onClose();
  };

  const addSpeaker = () => {
    setSpeakers([...speakers, { name: '', title: '', company: '' }]);
  };

  const removeSpeaker = (index: number) => {
    setSpeakers(speakers.filter((_, i) => i !== index));
  };

  const updateSpeaker = (index: number, field: string, value: string) => {
    const newSpeakers = [...speakers];
    (newSpeakers[index] as any)[field] = value;
    setSpeakers(newSpeakers);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-black text-slate-800 tracking-tight">ADD NEW SESSION</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[80vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Session Title</label>
              <input 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                placeholder="Ex: Future of Luxury Retail"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Session Type</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value as SessionType})}
              >
                <option value="Featured Session">Featured Session</option>
                <option value="Exhibitor Big Ideas">Exhibitor Big Ideas</option>
                <option value="KeyNote">KeyNote</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Location</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  placeholder="Ex: Stage 1 / Javits Hall"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Date</label>
              <input 
                type="date"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Start</label>
                <input 
                  type="time"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                  value={formData.time_start}
                  onChange={e => setFormData({...formData, time_start: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">End</label>
                <input 
                  type="time"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                  value={formData.time_end}
                  onChange={e => setFormData({...formData, time_end: e.target.value})}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Speakers</label>
                <button 
                  type="button" 
                  onClick={addSpeaker}
                  className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded-lg"
                >
                  <Plus size={14} /> Add Speaker
                </button>
              </div>
              
              <div className="space-y-3">
                {speakers.map((speaker, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex gap-3 animate-in slide-in-from-top-2">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input 
                        placeholder="Name"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-bold"
                        value={speaker.name}
                        onChange={e => updateSpeaker(idx, 'name', e.target.value)}
                      />
                      <input 
                        placeholder="Company"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        value={speaker.company}
                        onChange={e => updateSpeaker(idx, 'company', e.target.value)}
                      />
                    </div>
                    <button 
                      type="button"
                      onClick={() => removeSpeaker(idx)}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all"
            >
              CREATE SESSION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionDialog;
