-- These policies provide a secure but permissive setup for your `member_user` table.
-- First, ensure RLS is ENABLED on the `member_user` table in your Supabase dashboard.
-- Then, run these commands in your Supabase SQL Editor.

-- Policy 1: Allow all users (including non-logged-in visitors) to view all profiles.
-- This is useful for public profile pages. If you want only logged-in users to see profiles,
-- change `USING (true)` to `USING (auth.role() = 'authenticated')`.
CREATE POLICY "Allow public read access to all user profiles"
ON public.member_user
FOR SELECT
USING (true);


-- Policy 2: Allow logged-in users to insert their OWN profile.
-- This is the key policy that will fix your signup issue once RLS is re-enabled.
-- The `WITH CHECK (id = auth.uid())` part ensures a user can only create a profile for themselves.
CREATE POLICY "Allow members to insert their own profile"
ON public.member_user
FOR INSERT
WITH CHECK (id = auth.uid());


-- Policy 3: Allow logged-in users to update their OWN profile.
-- This will be necessary for any "edit profile" functionality you add later.
CREATE POLICY "Allow members to update their own profile"
ON public.member_user
FOR UPDATE
USING (id = auth.uid())
WITH CHECK (id = auth.uid());


-- Note: A policy for DELETE is not included by default. You can add one if you
-- want to allow users to delete their own accounts.
-- CREATE POLICY "Allow members to delete their own profile"
-- ON public.member_user
-- FOR DELETE
-- USING (id = auth.uid());
