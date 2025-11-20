import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Regional Workshop Series",
      date: "April 15-17, 2024",
      location: "Virtual Event",
      description: "Three-day intensive workshop covering best practices and innovations in the field.",
    },
    {
      title: "Annual General Meeting",
      date: "May 20, 2024",
      location: "Geneva, Switzerland",
      description: "Join members from around the world for our yearly gathering and strategic planning session.",
    },
    {
      title: "Summer Youth Camp",
      date: "July 1-14, 2024",
      location: "Barcelona, Spain",
      description: "Two-week intensive program for young members to develop skills and network.",
    },
    {
      title: "Technical Conference",
      date: "September 10-12, 2024",
      location: "Singapore",
      description: "Explore the latest advancements and connect with industry leaders.",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Symposium 2024",
      date: "January 15-17, 2024",
      location: "New York, USA",
      description: "A successful gathering of over 500 members discussing future strategies.",
    },
    {
      title: "Regional Training Day",
      date: "December 5, 2023",
      location: "London, UK",
      description: "Hands-on training sessions attended by members from across Europe.",
    },
    {
      title: "Annual Awards Ceremony",
      date: "November 20, 2023",
      location: "Tokyo, Japan",
      description: "Celebrating excellence and innovation among our global membership.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Events Calendar</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Join us at upcoming events or explore highlights from past gatherings
        </p>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
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
