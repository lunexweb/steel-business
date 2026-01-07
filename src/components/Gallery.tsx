import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gatesImage from "@/assets/service-gates.jpg";
import windowsImage from "@/assets/service-windows.jpg";
import doorsImage from "@/assets/service-doors.jpg";
import heroImage from "@/assets/hero-gate.jpg";
import projectGate1 from "@/assets/project-gate-1.jpg";
import projectCage1 from "@/assets/project-cage-1.jpg";
import projectCage2 from "@/assets/project-cage-2.jpg";

const Gallery = () => {
  const projects = [
    { image: heroImage, title: "Modern Geometric Gate", category: "Steel Gates" },
    { image: projectGate1, title: "Security Gate", category: "Steel Gates" },
    { image: projectCage1, title: "Industrial Enclosure", category: "Steel Fabrication" },
    { image: projectCage2, title: "Security Cage System", category: "Steel Fabrication" },
    { image: windowsImage, title: "Sliding Window System", category: "Aluminium Windows" },
    { image: doorsImage, title: "Contemporary Entrance", category: "Aluminium Doors" },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-accent">Recent Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of completed projects showcasing our commitment to excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-2xl h-72"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg">
            View Full Gallery
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
