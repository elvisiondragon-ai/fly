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
      title: "Global Competition Results Announced",
      excerpt: "Winners from over 50 countries celebrate their achievements in this year's international competition.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Competition",
      date: "March 15, 2024",
      featured: true,
    },
    {
      id: "2",
      title: "New Partnership Initiative Launched",
      excerpt: "Expanding our global reach with strategic partnerships across continents.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Announcement",
      date: "March 12, 2024",
    },
    {
      id: "3",
      title: "Annual Conference Details Released",
      excerpt: "Join us for our biggest gathering of the year with keynote speakers and workshops.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Events",
      date: "March 10, 2024",
    },
  ];

  const upcomingEvents = [
    {
      title: "Regional Workshop Series",
      date: "April 15-17, 2024",
      location: "Virtual Event",
      description: "Three-day intensive workshop covering best practices and innovations.",
    },
    {
      title: "Annual General Meeting",
      date: "May 20, 2024",
      location: "Geneva, Switzerland",
      description: "Join members from around the world for our yearly gathering.",
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
            Welcome to FLY.ORG
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Connecting global excellence and innovation across borders
          </p>
          <Link to="/join">
            <Button size="lg" variant="secondary" className="group">
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Link to="/news">
            <Button variant="outline">View All</Button>
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
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link to="/events">
              <Button variant="outline">View Calendar</Button>
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
          <h2 className="text-4xl font-bold mb-4">Join Our Global Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with professionals and enthusiasts from around the world
          </p>
          <Link to="/join">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
