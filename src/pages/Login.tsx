import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login Anggota</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Alamat Email
                </label>
                <Input id="email" type="email" placeholder="email.anda@contoh.com" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Kata Sandi
                </label>
                <Input id="password" type="password" placeholder="Masukkan kata sandi Anda" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Ingat saya</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Lupa kata sandi?
                </a>
              </div>

              <Button type="submit" className="w-full">
                Masuk
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Belum punya akun?{" "}
                <Link to="/join" className="text-primary hover:underline">
                  Daftar sekarang
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
