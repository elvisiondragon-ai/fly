import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const News = () => {
  const allNews = [
    {
      id: "1",
      title: "Global Competition Results Announced",
      excerpt: "Winners from over 50 countries celebrate their achievements in this year's international competition.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Competition",
      date: "March 15, 2024",
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
    {
      id: "4",
      title: "Member Spotlight: Innovation in Action",
      excerpt: "Highlighting the exceptional work of our community members making a difference.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Members",
      date: "March 8, 2024",
    },
    {
      id: "5",
      title: "New Resources Available for Members",
      excerpt: "Access exclusive guides, templates, and tools in the member dashboard.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      category: "Resources",
      date: "March 5, 2024",
    },
    {
      id: "6",
      title: "Regional Meetup Success Stories",
      excerpt: "Recap of recent regional gatherings and the connections made.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
      category: "Community",
      date: "March 1, 2024",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">News & Updates</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="competition">Competition</SelectItem>
              <SelectItem value="announcement">Announcement</SelectItem>
              <SelectItem value="events">Events</SelectItem>
              <SelectItem value="members">Members</SelectItem>
              <SelectItem value="resources">Resources</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
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
          <Button variant="outline">Previous</Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
