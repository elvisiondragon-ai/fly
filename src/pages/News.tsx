import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const News = () => {
  const allNews = [
    {
      id: "1",
      title: "Hasil Kompetisi Global Diumumkan",
      excerpt: "Pemenang dari lebih 50 negara merayakan pencapaian mereka dalam kompetisi internasional tahun ini.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Kompetisi",
      date: "15 Maret 2024",
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
    {
      id: "4",
      title: "Sorotan Anggota: Inovasi dalam Aksi",
      excerpt: "Menyoroti karya luar biasa dari anggota komunitas kami yang membuat perbedaan.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Anggota",
      date: "8 Maret 2024",
    },
    {
      id: "5",
      title: "Sumber Daya Baru Tersedia untuk Anggota",
      excerpt: "Akses panduan, templat, dan alat eksklusif di dasbor anggota.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      category: "Sumber Daya",
      date: "5 Maret 2024",
    },
    {
      id: "6",
      title: "Kisah Sukses Pertemuan Regional",
      excerpt: "Rekap pertemuan regional baru-baru ini dan koneksi yang terjalin.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
      category: "Komunitas",
      date: "1 Maret 2024",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Berita & Pembaruan</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Semua Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              <SelectItem value="competition">Kompetisi</SelectItem>
              <SelectItem value="announcement">Pengumuman</SelectItem>
              <SelectItem value="events">Acara</SelectItem>
              <SelectItem value="members">Anggota</SelectItem>
              <SelectItem value="resources">Sumber Daya</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Urutkan berdasarkan Tanggal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Terbaru</SelectItem>
              <SelectItem value="oldest">Terlama</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline">Sebelumnya</Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Berikutnya</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
