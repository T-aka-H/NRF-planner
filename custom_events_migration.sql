-- Create table for custom user events
create table if not exists public.user_custom_events (
    id uuid default gen_random_uuid() primary key,
    user_email text not null,
    title text not null,
    description text,
    day text not null,
    time_start text not null, -- Format HH:mm
    time_end text not null,   -- Format HH:mm
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies
alter table public.user_custom_events enable row level security;

-- Allow read/write for all (or restrict as needed depending on auth setup)
-- Assuming a simple setup where we trust the client to filter by email for now, 
-- or consistent with previous permissions if any. 
-- For safety, we can allow anon if the app uses anon key for everything.
create policy "Allow public read-write for custom events"
on public.user_custom_events
for all
to public
using (true)
with check (true);
