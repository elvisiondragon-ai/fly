import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

export default function Account() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function handleUpdatePassword() {
    if (!password) {
      toast.error("Please enter a new password.");
      return;
    }
    
    setLoading(true);
    console.log('Attempting to update password...');

    try {
      const { data, error } = await supabase.auth.updateUser({ password });

      console.log('Supabase response:', { data, error });

      if (error) {
        // Log the full error for detailed debugging
        console.error('Password update error:', error);
        
        // Provide specific user-friendly messages
        if (error.message.includes("same as the old")) {
          toast.error("New password cannot be the same as the old password.");
        } else if (error.code === '401') {
           toast.error("You are not authorized to perform this action.");
        }
        else {
          toast.error(error.message);
        }
      } else {
        toast.success('Password updated successfully!');
        setPassword('');
      }
    } catch (error: any) {
      console.error('Caught an unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      console.log('Finished password update attempt.');
      setLoading(false);
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <div>Email: {user.email}</div>
          
          <div className="mt-4 space-y-4">
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
          </div>

          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => supabase.auth.signOut().then(() => navigate('/auth'))}
              disabled={loading}
            >
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
