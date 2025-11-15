import climbImage from "@/assets/adventure-climb.jpg";
import trekImage from "@/assets/adventure-trek.jpg";
import campImage from "@/assets/adventure-camp.jpg";

const Adventures = () => {
  const adventures = [
    {
      title: "Rock Climbing",
      description: "Scale dramatic cliffs and rock faces with expert guidance. Perfect for beginners to advanced climbers.",
      image: climbImage,
      duration: "Half Day / Full Day",
    },
    {
      title: "Mountain Trekking",
      description: "Explore Jordan's breathtaking mountain trails. From sunrise hikes to multi-day expeditions.",
      image: trekImage,
      duration: "1-5 Days",
    },
    {
      title: "Camping Adventures",
      description: "Experience the wilderness under starlit skies. Complete camping setup and authentic outdoor dining.",
      image: campImage,
      duration: "1-3 Nights",
    },
  ];

  return (
    <section id="adventures" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Adventures</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Choose from our carefully curated outdoor experiences designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_rgba(253,214,185,0.15)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent"></div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {adventure.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {adventure.title}
                </h3>
                <p className="text-foreground/70 mb-4">{adventure.description}</p>
                
                {/* Triangle decoration */}
                <div className="w-8 h-8 border-2 border-primary/30 rotate-45 group-hover:border-primary transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;
