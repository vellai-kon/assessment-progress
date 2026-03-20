import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-bounce" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 mb-8 hover:border-primary/40 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Introducing the future of productivity
          </span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Build Amazing Things
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Faster Than Ever
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your workflow with our cutting-edge platform designed for modern teams. 
          Collaborate seamlessly, ship faster, and scale without limits.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto group">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4 h-auto group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by 50,000+ teams worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60 flex-wrap">
            <div className="w-24 h-8 bg-foreground/20 rounded-md flex items-center justify-center">
              <span className="text-xs font-semibold">Company</span>
            </div>
            <div className="w-24 h-8 bg-foreground/20 rounded-md flex items-center justify-center">
              <span className="text-xs font-semibold">Brand</span>
            </div>
            <div className="w-24 h-8 bg-foreground/20 rounded-md flex items-center justify-center">
              <span className="text-xs font-semibold">Corp</span>
            </div>
            <div className="w-24 h-8 bg-foreground/20 rounded-md flex items-center justify-center">
              <span className="text-xs font-semibold">Inc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;