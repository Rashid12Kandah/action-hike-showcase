import { Mountain, Users, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mountain,
      title: "Expert Guides",
      description: "Professional mountaineers with years of experience",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate experiences with personalized attention",
    },
    {
      icon: Award,
      title: "Safety First",
      description: "Certified equipment and comprehensive safety protocols",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "We live and breathe outdoor adventures",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Action Hike</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Based in the heart of Jordan, Action Hike is dedicated to providing unforgettable outdoor experiences. 
            We specialize in guided hiking, trekking, and climbing adventures across Jordan's most stunning landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,214,185,0.1)]"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
