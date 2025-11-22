import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('handleLogin started');
    try {
      setLoading(true)
      console.log('Attempting to sign in with email:', email);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      console.log('Supabase response:', { data, error });
      if (error) throw error
      toast.success('Logged in successfully!')
      navigate('/');
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.error_description || error.message)
    } finally {
      setLoading(false)
      console.log('handleLogin finished');
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup form submitted');
    console.log({ email });

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      setLoading(true)
      console.log('Attempting to sign up...');
      const { data: { user }, error } = await supabase.auth.signUp({ email, password })
      
      if (error) {
        console.error('Supabase signup error:', error);
        if (error.message.includes("captcha")) {
          toast.error("CAPTCHA verification failed. Please try again.");
          console.error("CAPTCHA is likely enabled on your Supabase project, but not implemented in the client.");
        } else if (error.message.includes("User already registered")) {
          toast.error("This email is already registered. Please try to log in.");
        } else {
          toast.error(`Signup failed: ${error.message}`);
        }
        return;
      }

      if (!user) {
        throw new Error("No user returned from sign up")
      }
      
      console.log('Signup successful, user created:', user);
      console.log('Attempting to insert profile...');

      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ auth_uid: user.id, user_email: email, updated_at: new Date().toISOString() }])
      
      if (profileError) {
        console.error('Supabase profile insert error:', profileError);
        throw profileError;
      }
      
      console.log('Profile inserted successfully.');
      toast.success('Signup successful! Please check your email for a confirmation link.')
    } catch (error: any) {
      console.error('An unexpected error occurred during signup:', error);
      toast.error(error.error_description || error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
      console.log('Signup process finished.');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <Input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                  </Button>
                  <div className="text-center">
                    <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm text-blue-600 hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignup}>
                <div className="space-y-4">

                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />

                  <Input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
