import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function UpdatePassword() {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || password.length < 6) {
      toast.error("Please enter a new password (min 6 chars).");
      return;
    }
    try {
      setLoading(true);
      const res = await supabase.auth.updateUser({ password });
      console.log('updateUser response', res);
      if (res.error) throw res.error;
      toast.success('Password updated successfully!');
      navigate('/');
    } catch (err: any) {
      console.error('updateUser error', err);
      toast.error(err.error_description || err.message || 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Update Your Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdatePassword} className="space-y-4">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                autoComplete="new-password"
              />
              <Button onClick={handleUpdatePassword} className="w-full" disabled={loading}>
                {loading ? 'Updating...' : 'Update Password'}
              </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
