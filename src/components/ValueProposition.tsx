import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main value proposition */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Custom Assessments. Intelligent Insights. Real<br />
          Change - <span className="underline">On Your Terms</span>
        </h2>
        
        {/* Supporting text */}
        <p className="text-lg text-foreground mb-6 max-w-3xl mx-auto">
          Whether you're leading transformation or supporting teams, AssessCenter helps you measure:
        </p>
        
        {/* Key metrics */}
        <div className="text-lg text-muted-foreground mb-8 space-y-1">
          <p><span className="italic">Leadership Effectiveness</span> | <span className="italic">Team Alignment</span> |</p>
          <p><span className="italic">Culture Health</span> | <span className="italic">High Potential Employees and more</span></p>
        </div>
        
        {/* Cost benefit */}
        <p className="text-xl font-semibold text-foreground mb-12">
          All at a fraction of the cost of traditional solutions.
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;