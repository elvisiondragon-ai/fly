import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Seri Lokakarya Regional",
      date: "15-17 April 2024",
      location: "Acara Virtual",
      description: "Lokakarya intensif tiga hari yang mencakup praktik terbaik dan inovasi di bidangnya.",
    },
    {
      title: "Rapat Umum Tahunan",
      date: "20 Mei 2024",
      location: "Jenewa, Swiss",
      description: "Bergabunglah dengan anggota dari seluruh dunia untuk pertemuan tahunan dan sesi perencanaan strategis kami.",
    },
    {
      title: "Kamp Pemuda Musim Panas",
      date: "1-14 Juli 2024",
      location: "Barcelona, Spanyol",
      description: "Program intensif dua minggu bagi anggota muda untuk mengembangkan keterampilan dan jaringan.",
    },
    {
      title: "Konferensi Teknis",
      date: "10-12 September 2024",
      location: "Singapura",
      description: "Jelajahi kemajuan terbaru dan terhubung dengan para pemimpin industri.",
    },
  ];

  const pastEvents = [
    {
      title: "Simposium Musim Dingin 2024",
      date: "15-17 Januari 2024",
      location: "New York, AS",
      description: "Pertemuan sukses lebih dari 500 anggota yang membahas strategi masa depan.",
    },
    {
      title: "Hari Pelatihan Regional",
      date: "5 Desember 2023",
      location: "London, Inggris",
      description: "Sesi pelatihan langsung yang dihadiri oleh anggota dari seluruh Eropa.",
    },
    {
      title: "Upacara Penghargaan Tahunan",
      date: "20 November 2023",
      location: "Tokyo, Jepang",
      description: "Merayakan keunggulan dan inovasi di antara keanggotaan global kami.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Kalender Acara</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Bergabunglah dengan kami di acara mendatang atau jelajahi sorotan dari acara sebelumnya
        </p>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming">Acara Mendatang</TabsTrigger>
            <TabsTrigger value="past">Acara Lampau</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, idx) => (
                <EventCard key={idx} {...event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event, idx) => (
                <EventCard key={idx} {...event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
