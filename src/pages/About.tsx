import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Jangkauan Global",
      description: "Menghubungkan anggota dari lebih 100 negara di seluruh dunia",
    },
    {
      icon: Users,
      title: "Komunitas Utama",
      description: "Membangun hubungan jangka panjang dan jaringan kolaboratif",
    },
    {
      icon: Award,
      title: "Keunggulan",
      description: "Mempromosikan standar tertinggi dalam segala hal yang kami lakukan",
    },
    {
      icon: Target,
      title: "Inovasi",
      description: "Mendorong kemajuan melalui pemikiran kreatif dan ide-ide berani",
    },
  ];

  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      role: "Presiden",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Wakil Presiden",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Elena Rodriguez",
      role: "Sekretaris Jenderal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "James Williams",
      role: "Bendahara",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tentang FLY.ORG</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Memberdayakan keunggulan global sejak 1995
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
          <p className="text-lg text-muted-foreground">
            FLY.ORG berdedikasi untuk mendorong kolaborasi dan keunggulan internasional di berbagai bidang. Kami menyatukan para profesional, inovator, dan peminat dari seluruh dunia untuk berbagi pengetahuan, merayakan pencapaian, dan mendorong perubahan positif di komunitas mereka.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="pt-6">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sejarah Kami</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Didirikan pada tahun 1995, FLY.ORG berawal dari sekelompok kecil individu yang bersemangat dan berkomitmen pada kolaborasi internasional. Selama tiga dekade terakhir, kami telah berkembang menjadi komunitas global yang maju dengan ribuan anggota di enam benua.
              </p>
              <p>
                Perjalanan kami ditandai oleh berbagai pencapaian, mulai dari mendirikan cabang regional hingga meluncurkan kompetisi internasional tahunan kami. Setiap tahun, kami terus memperluas jangkauan dan memperdalam dampak kami, tetap setia pada prinsip-prinsip pendirian kami sambil merangkul peluang baru untuk bertumbuh.
              </p>
              <p>
                Saat ini, FLY.ORG berdiri sebagai bukti kekuatan kerja sama global dan visi bersama. Kami tetap berkomitmen pada misi kami untuk mendorong keunggulan, inovasi, dan hubungan yang bermakna di antara keanggotaan kami yang beragam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Tim Kepemimpinan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, idx) => (
            <div key={idx} className="text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">{leader.name}</h3>
              <p className="text-muted-foreground">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
