import { CheckCircle, Users, Calendar, Wrench } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Wrench, value: "1200+", label: "Projects Completed" },
  ];

  const values = [
    "Premium quality materials sourced from trusted suppliers",
    "Skilled craftsmen with years of expertise",
    "Competitive pricing without compromising quality",
    "On-time delivery and professional installation",
    "Custom designs tailored to your specifications",
    "After-sales support and warranty coverage",
  ];

  return (
    <section id="about" className="py-24 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-gradient-accent">S & A Solutions</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              With over 15 years of experience in the steel and aluminium industry, 
              S & A Solutions has established itself as a trusted name in quality 
              craftsmanship. We take pride in delivering exceptional products that 
              stand the test of time.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-6 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10"
              >
                <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center shadow-accent">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold text-primary-foreground">
                    {value}
                  </div>
                  <div className="text-primary-foreground/60 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
