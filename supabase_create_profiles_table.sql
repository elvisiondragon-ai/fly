-- This script creates a new `profiles` table and applies the recommended security policies.
-- Run this entire script in your Supabase SQL Editor.

-- Step 1: Create the new 'profiles' table.
-- This table will store public user profile information.
CREATE TABLE public.profiles (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  auth_uid uuid NOT NULL,
  user_email text NULL, -- Renamed from 'username' to 'user_email'
  updated_at timestamp with time zone NULL DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_auth_uid_fkey FOREIGN KEY (auth_uid) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Step 2: Enable Row-Level Security (RLS) on the new table.
-- This is a crucial security step.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Step 3: Create the necessary RLS policies.

-- Policy 1: Allow public read access to all user profiles.
CREATE POLICY "Allow public read access to all user profiles"
ON public.profiles
FOR SELECT
USING (true);

-- Policy 2: Allow logged-in users to insert their OWN profile.
-- This is the key policy to fix the signup issue.
-- It uses 'auth_uid' to match the user's ID.
CREATE POLICY "Allow members to insert their own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth_uid = auth.uid());

-- Policy 3: Allow logged-in users to update their OWN profile.
-- It uses 'auth_uid' to match the user's ID.
CREATE POLICY "Allow members to update their own profile"
ON public.profiles
FOR UPDATE
USING (auth_uid = auth.uid())
WITH CHECK (auth_uid = auth.uid());

-- Final check: Informational comment.
-- You can view your new policies in the Supabase Dashboard under Authentication -> Policies.
COMMENT ON TABLE public.profiles IS 'Stores public profile information for users.';
