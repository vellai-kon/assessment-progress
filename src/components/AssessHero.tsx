import { Button } from "@/components/ui/button";

const AssessHero = () => {
  return (
    <section className="bg-gradient-hero py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          An AI‑Powered Assessment Platform<br />
          That Puts You in Control
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 italic">
          from assessment creation to execution and measurable results.
        </p>
        
        {/* Coming soon */}
        <div className="mb-8">
          <p className="text-2xl font-semibold text-foreground mb-6">
            Coming Early 2026
          </p>
          <div className="waitlist-border">
            <Button 
              variant="waitlist" 
              size="lg" 
              className="waitlist-border-inner"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessHero;