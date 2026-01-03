
export type SessionType = 
  | 'KeyNote' 
  | 'Featured Session' 
  | 'Exhibitor Big Ideas' 
  | 'AI Stage' 
  | 'Foodservice Tech' 
  | 'Ask the Speaker' 
  | 'Special Program' 
  | 'Networking Event';

export interface Speaker {
  name: string;
  title: string;
  company: string;
}

export interface Session {
  id: string;
  date: string;
  day: string;
  time_start: string;
  time_end: string;
  title: string;
  speakers?: Speaker[];
  type: SessionType;
  location?: string;
  isSelected?: boolean;
  isInterested?: boolean;
}

export interface AppState {
  savedSessions: Session[];
}
