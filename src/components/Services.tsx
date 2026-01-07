import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gatesImage from "@/assets/service-gates.jpg";
import windowsImage from "@/assets/service-windows.jpg";
import doorsImage from "@/assets/service-doors.jpg";

const Services = () => {
  const services = [
    {
      title: "Steel Gates",
      description: "Custom-designed steel gates built from scratch. From elegant entrance gates to robust security barriers, we create durable solutions that combine aesthetics with functionality.",
      image: gatesImage,
      features: ["Custom Designs", "Driveway Gates", "Security Gates", "Automated Options"],
    },
    {
      title: "Aluminium Windows",
      description: "Premium aluminium windows that offer exceptional durability, energy efficiency, and modern aesthetics. Perfect for residential and commercial properties.",
      image: windowsImage,
      features: ["Sliding Windows", "Casement Windows", "Fixed Panels", "Custom Sizes"],
    },
    {
      title: "Aluminium Doors",
      description: "Stylish and secure aluminium doors designed to complement any architecture. From sliding doors to pivot entrances, we deliver excellence.",
      image: doorsImage,
      features: ["Sliding Doors", "Pivot Doors", "French Doors", "Bifold Systems"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to installation, we deliver premium steel and aluminium solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading text-2xl font-bold text-primary-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn text-accent hover:text-accent p-0">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
