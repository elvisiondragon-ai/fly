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
          ← Back to News
        </Link>

        <Badge className="mb-4">Competition</Badge>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Global Competition Results Announced
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            March 15, 2024
          </div>
          <span>•</span>
          <span>By Editorial Team</span>
        </div>

        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Global Competition Results"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Winners from over 50 countries celebrate their achievements in this year's international competition, marking one of our most successful events to date.
          </p>

          <p className="mb-4">
            We are thrilled to announce the results of this year's global competition, which saw unprecedented participation from members across all continents. The competition showcased exceptional talent and innovation, with entries that pushed the boundaries of excellence in their respective categories.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Record-Breaking Participation</h2>
          <p className="mb-4">
            This year's competition attracted over 5,000 entries from 50+ countries, representing a 40% increase from last year. The diversity of submissions reflected our organization's truly global reach and the dedication of our members to advancing their fields.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Award Categories</h2>
          <p className="mb-4">
            Winners were selected across multiple categories, including Innovation, Community Impact, Sustainability, and Youth Achievement. Each category was judged by an international panel of experts who evaluated entries based on creativity, execution, and potential for positive impact.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
          <p className="mb-4">
            As we celebrate this year's winners, we're already planning next year's competition. We encourage all members to start preparing their submissions and to reach out if they need guidance or resources. Together, we continue to raise the bar for excellence.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
          <span className="font-semibold">Share this article:</span>
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
