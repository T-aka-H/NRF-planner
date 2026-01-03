
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase URL or Anon Key. Authentication will not work.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export type UserSchedule = {
    id?: number;
    user_id: string;
    session_id: string;
    is_selected: boolean;
    is_interested: boolean;
    updated_at?: string;
};

import { Session, SessionResource } from '../types';

export const getSessionKey = (session: Session) => {
    return `${session.title}|${session.date}|${session.time_start}`;
};

export const fetchSessionResources = async (): Promise<Record<string, SessionResource>> => {
    const { data, error } = await supabase
        .from('session_resources')
        .select('*');

    if (error) {
        console.error('Error fetching resources:', error);
        return {};
    }

    const resourcesMap: Record<string, SessionResource> = {};
    data?.forEach((res: SessionResource) => {
        resourcesMap[res.session_id] = res;
    });

    return resourcesMap;
};

export const saveSessionResource = async (resource: Partial<SessionResource> & { session_id: string }) => {
    // Check if exists
    const { session_id, ...updates } = resource;

    // We use upsert for simplicity
    const { data, error } = await supabase
        .from('session_resources')
        .upsert({ session_id, ...updates }, { onConflict: 'session_id' })
        .select()
        .single();

    if (error) throw error;
    return data;
};
