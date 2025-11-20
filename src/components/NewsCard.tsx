import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
}

export const NewsCard = ({ id, title, excerpt, image, category, date, featured }: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`}>
      <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'md:col-span-2' : ''}`}>
        <div className={`relative ${featured ? 'h-96' : 'h-48'}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-accent">
            {category}
          </Badge>
        </div>
        <CardHeader>
          <h3 className={`font-bold hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
