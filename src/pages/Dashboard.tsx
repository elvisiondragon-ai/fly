import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, User, Calendar } from "lucide-react";

const Dashboard = () => {
  const memberInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    country: "Amerika Serikat",
    memberSince: "Januari 2023",
    status: "Aktif",
  };

  const documents = [
    { title: "Buku Panduan Anggota 2024", date: "1 Jan 2024", size: "2.5 MB" },
    { title: "Laporan Tahunan 2023", date: "15 Des 2023", size: "5.1 MB" },
    { title: "Panduan & Sumber Daya", date: "20 Nov 2023", size: "1.8 MB" },
  ];

  const upcomingEvents = [
    { title: "Lokakarya Regional", date: "15 April 2024", location: "Virtual" },
    { title: "Rapat Umum Tahunan", date: "20 Mei 2024", location: "Jenewa" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dasbor Anggota</h1>
          <p className="text-muted-foreground">Selamat datang kembali, {memberInfo.name}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Nama</p>
                <p className="font-medium">{memberInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{memberInfo.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Negara</p>
                <p className="font-medium">{memberInfo.country}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Anggota Sejak</p>
                <p className="font-medium">{memberInfo.memberSince}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className="bg-accent">{memberInfo.status}</Badge>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ubah Profil
              </Button>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Dokumen Eksklusif
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary transition-colors"
                    >
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.date} • {doc.size}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Acara Anda yang Akan Datang
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-border"
                    >
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {event.date} • {event.location}
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    Lihat Semua Acara
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Tindakan Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">Perbarui Profil</Button>
                  <Button variant="outline">Ganti Kata Sandi</Button>
                  <Button variant="outline">Lihat Direktori</Button>
                  <Button variant="outline">Hubungi Dukungan</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
