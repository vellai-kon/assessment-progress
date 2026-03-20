import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MousePointer, ArrowLeft, ExternalLink } from "lucide-react";

const InteractiveSection = () => {
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});

  const toggleCard = (cardIndex: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setFlippedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };

  const resetCards = () => {
    setFlippedCards({});
  };

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Check if the click is outside any card
      const target = event.target as HTMLElement;
      const cardContainer = target.closest('.card-container');
      if (!cardContainer) {
        resetCards();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* First interactive card */}
          <div 
            className="h-80 perspective-1000 cursor-pointer card-container"
            onClick={(e) => toggleCard(0, e)}
          >
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards[0] ? 'rotate-y-180' : ''}`}>
              {/* Front face */}
              <div className="absolute inset-0 gradient-border group backface-hidden">
                <div className="gradient-border-inner p-8 flex flex-col justify-center items-center text-center space-y-6">
                  <h2 className="text-3xl font-bold text-foreground leading-tight">
                    Assessment Costs
                  </h2>
                  <p className="text-lg font-light text-muted-foreground">
                    Discover what you're really spending
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MousePointer className="w-4 h-4 mr-2" />
                    Click to Reveal
                  </Button>
                </div>
              </div>
              
              {/* Back face */}
              <div className="absolute inset-0 gradient-border rotate-y-180 backface-hidden">
                <div className="gradient-border-inner p-8 flex flex-col justify-center space-y-6">
                  <ul className="space-y-6 text-sm text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">•</span>
                      <div>
                        <strong className="font-semibold">Per-assessment Charges</strong>
                        <p className="font-light mt-1">$5K–$20K per assessment, depending on size and customization.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">•</span>
                      <div>
                        <strong className="font-semibold">Customization Fees</strong>
                        <p className="font-light mt-1">$2K–$10K for adapting language, benchmarks, or formats.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">•</span>
                      <div>
                        <strong className="font-semibold">Reporting & Consulting</strong>
                        <p className="font-light mt-1">$250–$500/hr for analysis, interpretation, and recommendations.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">•</span>
                      <div>
                        <strong className="font-semibold">Annual Licensing Traps</strong>
                        <p className="font-light mt-1">Enterprise contracts ($50K–$250K+) that rise with headcount or "mandatory upgrades," even when usage stays flat.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second interactive card */}
          <div 
            className="h-80 perspective-1000 cursor-pointer card-container"
            onClick={(e) => toggleCard(1, e)}
          >
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards[1] ? 'rotate-y-180' : ''}`}>
              {/* Front face */}
              <div className="absolute inset-0 gradient-border group backface-hidden">
                <div className="gradient-border-inner p-8 flex flex-col justify-center items-center text-center space-y-8">
                  <h2 className="text-4xl font-bold text-foreground leading-tight">
                    How AssessCenter is changing it?
                  </h2>
                  <p className="text-xl font-light text-muted-foreground">
                    (Click to find out)
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MousePointer className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
              
              {/* Back face */}
              <div className="absolute inset-0 gradient-border rotate-y-180 backface-hidden">
                <div className="gradient-border-inner p-8 flex flex-col justify-center items-center text-center space-y-8">
                  <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
                    One Subscription, Unlimited Potential
                  </h3>
                  <p className="text-lg font-light text-muted-foreground leading-relaxed">
                    Pay a flat monthly subscription based on your chosen plan — no per-assessment fees, no hidden add-ons, no surprise invoices, unlimited access.
                  </p>
                  <a 
                    href="/learn-more" 
                    className="inline-flex"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button className="group">
                      <span className="mr-2">Discover Our Solution</span>
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;