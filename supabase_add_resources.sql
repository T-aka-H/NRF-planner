-- 1. Create session_resources table
create table if not exists session_resources (
  id uuid default uuid_generate_v4() primary key,
  session_id text not null, -- Mapped to session title
  audio_url text,           -- Link to audio file
  notebook_url text,        -- Link to NotebookLM
  mindmap_url text,         -- Link to MindMap
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(session_id)
);

-- 2. Enable RLS
alter table session_resources enable row level security;

-- 3. Create Policies
-- Allow public read access to resources
create policy "Public read access"
  on session_resources for select
  using ( true );

-- Allow authenticated users (admins) to insert/update
create policy "Authenticated insert/update"
  on session_resources for all
  using ( auth.role() = 'authenticated' );
