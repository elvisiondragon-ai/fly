import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const NewsArticle = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/news" className="text-primary hover:underline mb-4 inline-block">
          ← Kembali ke Berita
        </Link>

        <Badge className="mb-4">Kompetisi</Badge>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hasil Kompetisi Global Diumumkan
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            15 Maret 2024
          </div>
          <span>•</span>
          <span>Oleh Tim Editorial</span>
        </div>

        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Global Competition Results"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Pemenang dari lebih 50 negara merayakan pencapaian mereka dalam kompetisi internasional tahun ini, menandai salah satu acara kami yang paling sukses hingga saat ini.
          </p>

          <p className="mb-4">
            Kami sangat gembira mengumumkan hasil kompetisi global tahun ini, yang diikuti oleh partisipasi luar biasa dari anggota di semua benua. Kompetisi ini menampilkan bakat dan inovasi yang luar biasa, dengan karya-karya yang mendorong batas keunggulan dalam kategori masing-masing.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Partisipasi yang Memecahkan Rekor</h2>
          <p className="mb-4">
            Kompetisi tahun ini menarik lebih dari 5.000 entri dari 50+ negara, mewakili peningkatan 40% dari tahun lalu. Keragaman kiriman mencerminkan jangkauan organisasi kami yang benar-benar global dan dedikasi anggota kami untuk memajukan bidang mereka.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Kategori Penghargaan</h2>
          <p className="mb-4">
            Pemenang dipilih di berbagai kategori, termasuk Inovasi, Dampak Komunitas, Keberlanjutan, dan Prestasi Pemuda. Setiap kategori dinilai oleh panel ahli internasional yang mengevaluasi entri berdasarkan kreativitas, eksekusi, dan potensi dampak positif.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Melihat ke Depan</h2>
          <p className="mb-4">
            Saat kita merayakan para pemenang tahun ini, kami sudah merencanakan kompetisi tahun depan. Kami mendorong semua anggota untuk mulai mempersiapkan kiriman mereka dan untuk menghubungi jika mereka memerlukan bimbingan atau sumber daya. Bersama-sama, kita terus meningkatkan standar keunggulan.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
          <span className="font-semibold">Bagikan artikel ini:</span>
          <Button variant="outline" size="icon">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle;
