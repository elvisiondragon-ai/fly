import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabaseClient";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log('handleLogout called');
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      } else {
        console.log('Successfully signed out');
      }
    } catch (e) {
      console.error('Exception during sign out:', e);
    } finally {
      console.log('Navigating to /auth');
      navigate('/auth');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            FLY.ORG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link to="/news" className="text-foreground hover:text-primary transition-colors">
              Berita
            </Link>
            <Link to="/events" className="text-foreground hover:text-primary transition-colors">
              Acara
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            {session ? (
              <>
                <Link to="/account">
                  <Button variant="outline">Profile</Button>
                </Link>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline">Masuk</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/news" className="text-foreground hover:text-primary transition-colors">
                Berita
              </Link>
              <Link to="/events" className="text-foreground hover:text-primary transition-colors">
                Acara
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                Tentang
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Kontak
              </Link>
              <div className="flex gap-2 pt-2">
                {session ? (
                  <>
                    <Link to="/account" className="flex-1">
                      <Button variant="outline" className="w-full">Profile</Button>
                    </Link>
                    <Button onClick={handleLogout} className="flex-1">Logout</Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" className="flex-1">
                      <Button variant="outline" className="w-full">Masuk</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
