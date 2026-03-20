import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import boardroomImage from "@/assets/boardroom-meeting.png";
const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <section className="bg-gradient-subtle py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with intro content and image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Left content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-3xl font-bold">
              We know what it's like to sit in a boardroom, surrounded by reports that don't answer the real questions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              For years, we worked as consultants, coaches, and leaders inside organizations — watching teams struggle with misalignment, burnout, and stalled change efforts. The tools promised insight, but too often delivered only glossy reports and vague answers.
            </p>

            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger asChild>
                <Button variant="default" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                  Learn More
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img src={boardroomImage} alt="Professional boardroom meeting with business executives discussing strategy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Expanded content - full width below the top section */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleContent className="animate-accordion-down">
            <div className="mt-12 space-y-16">
              {/* Our Story Section */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Story: From Frustration to Freedom</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've spent years as consultants, coaches, and leaders, walking inside organizations trying to navigate complexity. We've sat in boardrooms thick with tension, held space for teams on the edge of burnout, and designed frameworks to bring clarity where confusion ruled.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Time and again, we saw the same problem: organizations wanted real insight but got stuck with glossy reports, delayed data, and vague answers. Momentum slipped, trust eroded, and change efforts fizzled.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  So, over hot chocolate, coffee, and shared frustration, we asked: "What if we stopped trying to fix broken tools—and built our own?"
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That spark became <strong>AssessCenter</strong> — an AI-powered assessment platform built for leaders, HR teams, and coaches who want <strong>faster</strong>, <strong>deeper</strong>, and <strong>more human insights</strong>.
                </p>
              </div>

              {/* What We Dreamed Of vs What We Built */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">What We Dreamed Of</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">We imagined a platform that:</p>
                    <ul className="space-y-3 text-muted-foreground ml-4">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Gives <strong>speed without losing depth</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Provides <strong>insights that lead directly to action</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Uses <strong>AI to amplify human wisdom, not replace it</strong></span>
                      </li>
                    </ul>
                    
                    <p className="text-muted-foreground mt-6">And we refused to compromise on:</p>
                    <ul className="space-y-3 text-muted-foreground ml-4">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span><strong>Ethics and transparency</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span><strong>User control and flexibility</strong></span>
                      </li>
                    </ul>
                    
                    <p className="text-muted-foreground mt-6 font-medium">
                      And so, <strong>AssessCenter</strong> was born.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">What We Built</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">AssessCenter is more than a tool, it's a partner. With it, you can:</p>
                    <ul className="space-y-3 text-muted-foreground ml-4">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Create <strong>custom assessments</strong> without needing a data science degree</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Get <strong>real-time reports and AI-powered recommendations</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Build <strong>action plans</strong> that turn strategy into measurable results</span>
                      </li>
                    </ul>
                    
                    <p className="text-muted-foreground mt-6">
                      No cookie-cutter templates. No vendor lock-in. Just clarity, adaptability, and momentum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why It Matters */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Why It Matters</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Because <strong>insight shouldn't be a luxury</strong>. Because leaders deserve tools that meet them where they are. Because transformation starts with understanding — and understanding starts with asking the right questions.
If you've ever felt stuck between knowing and doing, if you've wished for a tool that fits your context instead of someone else's template, then AssessCenter was built for you.
Join us — and let's reshape how organizations <strong>learn, grow, and lead with clarity and courage</strong>.</p>
              </div>

              {/* Mission, Vision, Tribe Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-elegant">
                  <h4 className="text-xl font-bold mb-4 text-center">Mission</h4>
                  <p className="text-gray-300 leading-relaxed text-center">We empower organizations to take full ownership of their growth journey by providing an AI-powered platform that enables them to create custom assessments, generate intelligent insights, and drive impact—all on their terms.</p>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-elegant">
                  <h4 className="text-xl font-bold mb-4 text-center">Vision</h4>
                  <p className="text-gray-300 leading-relaxed text-center">To make meaningful insight and action accessible to every organization—by transforming the way assessments are created, understood, and used to drive real change.</p>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-elegant">
                  <h4 className="text-xl font-bold mb-4 text-center">Tribe</h4>
                  <p className="text-gray-300 leading-relaxed text-center">We're a team of change practitioners, organizational psychologists, technologists, and culture transformation experts who believe that assessments shouldn't be static, expensive, or disconnected from action.</p>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>;
};
export default AboutUs;