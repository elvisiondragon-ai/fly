import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting members from over 100 countries worldwide",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building lasting relationships and collaborative networks",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Promoting the highest standards in everything we do",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Driving progress through creative thinking and bold ideas",
    },
  ];

  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Elena Rodriguez",
      role: "Secretary General",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "James Williams",
      role: "Treasurer",
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
          <h1 className="text-5xl font-bold mb-4">About FLY.ORG</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering global excellence since 1995
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            FLY.ORG is dedicated to fostering international collaboration and excellence across diverse fields. We bring together professionals, innovators, and enthusiasts from around the world to share knowledge, celebrate achievements, and drive positive change in their communities.
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
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1995, FLY.ORG began as a small group of passionate individuals committed to international collaboration. Over the past three decades, we have grown into a thriving global community with thousands of members across six continents.
              </p>
              <p>
                Our journey has been marked by numerous milestones, from establishing regional chapters to launching our annual international competitions. Each year, we continue to expand our reach and deepen our impact, staying true to our founding principles while embracing new opportunities for growth.
              </p>
              <p>
                Today, FLY.ORG stands as a testament to the power of global cooperation and shared vision. We remain committed to our mission of fostering excellence, innovation, and meaningful connections among our diverse membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
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
