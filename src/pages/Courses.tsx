import { MapPin, Clock, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ampfieldCourse from "@/assets/ampfield-golf-club-panorama.jpg";
import ampfieldCourse2 from "@/assets/ampfield-golf-course-2.jpg";

const Courses = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner Courses
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Enter our daily golf competition at partner courses across the UK
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Ampfield Golf Club Card */}
            <Card className="overflow-hidden border-2 border-accent/20 shadow-xl">
              <div className="relative">
                <img 
                  src={ampfieldCourse} 
                  alt="Ampfield Golf Club Course - 18 Hole Par 3 in Hampshire" 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm px-4 py-2">
                  Coming Soon
                </Badge>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <a 
                      href="https://www.ampfieldgolf.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl md:text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors"
                    >
                      Ampfield Golf Club
                    </a>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Romsey, Hampshire</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-primary border-primary">
                    18 Hole Par 3
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in the early 1960s, Ampfield Golf Club was the original 18 Hole Par 3 Course 
                  in the country. Designed by three-time major winner Sir Henry Cotton, it remains one 
                  of the most beautiful and enjoyable privately owned short courses in the UK.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Flag className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Holes</p>
                      <p className="font-semibold text-foreground">18 Par 3</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Play Time</p>
                      <p className="font-semibold text-foreground">~2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">Romsey</p>
                    </div>
                  </div>
                </div>


                {/* Secondary Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={ampfieldCourse2} 
                    alt="Golfers at Ampfield Golf Club" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold">Hole Out Golf Coming Soon</p>
                      <p className="text-sm text-white/80">Enter our daily competition on any par 3</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* More Courses Coming */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                More partner courses coming soon across the UK
              </p>
              <a 
                href="mailto:info@holeoutgolf.co.uk" 
                className="text-primary hover:text-primary/80 font-medium underline underline-offset-4"
              >
                Interested in partnering with us? Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;