import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">FLY.ORG</h3>
            <p className="text-sm text-muted-foreground">
              Sebuah organisasi global yang didedikasikan untuk keunggulan dan inovasi.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Acara
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Keanggotaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-primary transition-colors">
                  Gabung Sekarang
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login Anggota
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dasbor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@fly.org</li>
              <li>+1 (555) 123-4567</li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Formulir Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FLY.ORG. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
