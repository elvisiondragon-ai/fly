-- WARNING: Running these commands will permanently delete all data in your `member_user` table.
-- Please back up your data if necessary before proceeding.

-- Step 1: Delete the existing table.
-- This command removes the `member_user` table and any dependent objects.
DROP TABLE IF EXISTS public.member_user;


-- Step 2: Recreate the table safely.
-- This command creates a new `member_user` table with columns that match your schema.
-- It links the table to `auth.users` so that if a user is deleted, their profile is also deleted.
CREATE TABLE public.member_user (
  id uuid NOT NULL,
  nama_lengkap text NULL,
  email text NULL,
  CONSTRAINT member_user_pkey PRIMARY KEY (id),
  CONSTRAINT member_user_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
);


-- Step 3: (Manual Step) Disable Row-Level Security (RLS) for now.
-- After running the queries above in your Supabase SQL Editor, you must manually disable RLS on the new table to allow signups.
-- 1. Go to your Supabase Dashboard.
-- 2. Navigate to the 'Authentication' section, then 'Policies'.
-- 3. Select the `member_user` table.
-- 4. Ensure 'Enable Row Level Security (RLS)' is turned OFF.
-- 5. Once you confirm signup works, you should enable RLS and add a secure policy.
