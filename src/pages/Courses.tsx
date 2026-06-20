import { MapPin, Clock, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ampfieldCourse from "@/assets/ampfield-golf-club-panorama.jpg";
import ampfieldCourse2 from "@/assets/ampfield-golf-course-2.jpg";
import boundaryLakesCourse from "@/assets/boundary-lakes-course.jpg";
import { SEO } from "@/components/SEO";

const coursesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Hole Out Golf Partner Courses",
  "description": "Golf courses participating in the Hole Out Golf hole-in-one challenge",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "GolfCourse",
        "name": "Boundary Lakes Golf Course",
        "description": "Par 69 parkland course at Utilita Bowl, Southampton with USGA-standard greens",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Southampton",
          "addressRegion": "Hampshire",
          "addressCountry": "GB"
        },
        "url": "https://www.utilitabowl.com/golf/"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "GolfCourse",
        "name": "Ampfield Golf Club",
        "description": "18 Hole Par 3 course designed by Sir Henry Cotton in Hampshire",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Romsey",
          "addressRegion": "Hampshire",
          "addressCountry": "GB"
        },
        "url": "https://www.ampfieldgolf.com"
      }
    }
  ]
};

const Courses = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Partner Golf Courses - Challenge Locations"
        description="Find Hole Out Golf partner courses across the UK. Enter our hole-in-one challenge at Ampfield Golf Club and Boundary Lakes Golf Course in Southampton."
        canonicalUrl="https://holeoutgolf.co.uk/courses"
        keywords="golf courses UK, par 3 golf courses, Ampfield Golf Club, Boundary Lakes, Southampton golf, Hampshire golf, hole in one courses"
        structuredData={coursesStructuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner Courses
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take your shot at partner courses across the UK
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Boundary Lakes Golf Course Card */}
            <Card className="overflow-hidden border-2 border-accent/20 shadow-xl">
              <div className="relative">
                <img 
                  src={boundaryLakesCourse} 
                  alt="Boundary Lakes Golf Course - Par 69 parkland course in Southampton" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <a 
                      href="https://www.utilitabowl.com/golf/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl md:text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors"
                    >
                      Boundary Lakes Golf Course
                    </a>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Southampton, Hampshire</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-primary border-primary">
                    18 Hole Par 69
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Set against the iconic backdrop of Hampshire Cricket's home at Utilita Bowl, Boundary Lakes 
                  is an 18-hole parkland course with USGA-standard greens. Built in 1999 and designed by 
                  Weller Designs, it offers a true and consistent challenge for golfers of all abilities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Flag className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Holes</p>
                      <p className="font-semibold text-foreground">18 Par 69</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Length</p>
                      <p className="font-semibold text-foreground">5,154 yards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">Southampton</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ampfield Golf Club Card */}
            <Card className="overflow-hidden border-2 border-accent/20 shadow-xl mt-12">
              <div className="relative">
                <img 
                  src={ampfieldCourse} 
                  alt="Ampfield Golf Club Course - 18 Hole Par 3 in Hampshire" 
                  className="w-full h-64 md:h-80 object-cover"
                />
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
                      <p className="font-semibold">Hole Out Golf</p>
                      <p className="text-sm text-white/80">Take your shot on any par 3</p>
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