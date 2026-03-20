import { Card } from "@/components/ui/card";
import { Zap, Shield, Users, Rocket, Globe, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with cutting-edge technology that scales with your needs."
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security with end-to-end encryption and compliance standards."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration and communication tools."
    },
    {
      icon: Rocket,
      title: "Ship Faster",
      description: "Streamlined workflows and automation help you deliver products at light speed."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our distributed infrastructure and CDN network."
    },
    {
      icon: Heart,
      title: "Built with Love",
      description: "Crafted with attention to detail and a passion for exceptional user experience."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to help modern teams build, ship, and scale their products with confidence.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;