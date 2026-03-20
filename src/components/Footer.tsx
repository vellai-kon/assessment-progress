import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA Section */}
        <h3 className="text-3xl font-bold mb-8">
          Join the Future of Assessment
        </h3>
        
        <div className="waitlist-border mb-8">
          <Button 
            variant="waitlist" 
            size="lg" 
            className="waitlist-border-inner"
          >
            Join Waitlist
          </Button>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="#" 
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;