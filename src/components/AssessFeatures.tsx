import { Card } from "@/components/ui/card";

const AssessFeatures = () => {
  const features = [
    {
      title: "Drive Up Performance & Engagement",
      description: "Organizations using AI-driven performance reviews report a 71% increase in employee engagement, a 50% improvement in goal achievement, and a 33% reduction in bias during assessments.",
      link: "https://www.thrivesparrow.com/blog/performance-management-statistics"
    },
    {
      title: "Boost Productivity with AI Assistance",
      description: "In contexts beyond HR—like customer support—generative AI tools have increased worker productivity by 15%, with particular gains among less experienced workers.",
      link: "https://www.virtasant.com/ai-today/ais-influence-on-corporate-cultures-insights-from-amazon-sprintit-and-hp"
    },
    {
      title: "Strengthen Culture & Collaboration",
      description: "Enterprises implementing broader AI solutions saw 79% of employees reporting positive changes in workplace efficiency and cultural dynamics, with 87% noting enhanced collective learning and 78% improved collaboration.",
      link: "https://www.virtasant.com/ai-today/ais-influence-on-corporate-cultures-insights-from-amazon-sprintit-and-hp"
    },
    {
      title: "Reduce Turnover & Improve Retention",
      description: "A SHRM report found that organizations using AI in feedback processes achieved a 22% increase in employee retention.",
      link: "https://hirebee.ai/blog/ai-in-hr-statistics"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Problem statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Traditional assessments <span className="underline">are slow</span>,<br />
            <span className="underline">expensive, and vendor-dependent.</span>
          </h2>
          
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            AssessCenter changes that—giving HR teams, consultants, and change agents the power to design, 
            analyze, and act with speed and precision.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-black text-white border-2 border-primary hover:border-primary transition-all duration-300 cursor-pointer"
              onClick={() => window.open(feature.link, '_blank')}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed text-center">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessFeatures;