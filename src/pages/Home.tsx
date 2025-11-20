import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredNews = [
    {
      id: "1",
      title: "Hasil Kompetisi Global Diumumkan",
      excerpt: "Pemenang dari lebih 50 negara merayakan pencapaian mereka dalam kompetisi internasional tahun ini.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Kompetisi",
      date: "15 Maret 2024",
      featured: true,
    },
    {
      id: "2",
      title: "Inisiatif Kemitraan Baru Diluncurkan",
      excerpt: "Memperluas jangkauan global kami dengan kemitraan strategis di seluruh benua.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Pengumuman",
      date: "12 Maret 2024",
    },
    {
      id: "3",
      title: "Detail Konferensi Tahunan Dirilis",
      excerpt: "Bergabunglah dengan kami untuk pertemuan terbesar tahun ini dengan pembicara utama dan lokakarya.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Acara",
      date: "10 Maret 2024",
    },
  ];

  const upcomingEvents = [
    {
      title: "Seri Lokakarya Regional",
      date: "15-17 April 2024",
      location: "Acara Virtual",
      description: "Lokakarya intensif tiga hari yang mencakup praktik terbaik dan inovasi.",
    },
    {
      title: "Rapat Umum Tahunan",
      date: "20 Mei 2024",
      location: "Jenewa, Swiss",
      description: "Bergabunglah dengan anggota dari seluruh dunia untuk pertemuan tahunan kami.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Selamat Datang di FLY.ORG
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Menghubungkan keunggulan dan inovasi global melintasi batas
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Berita Terbaru</h2>
          <Link to="/news">
            <Button variant="outline">Lihat Semua</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Acara Mendatang</h2>
            <Link to="/events">
              <Button variant="outline">Lihat Kalender</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bergabunglah dengan Komunitas Global Kami</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Terhubung dengan para profesional dan peminat dari seluruh dunia
          </p>
          <Link to="/join">
            <Button size="lg" variant="secondary">
              Mulai Hari Ini
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
