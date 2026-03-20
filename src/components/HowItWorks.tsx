import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            Our intuitive process makes taking assessments and driving development{" "}
            <span className="text-primary">simple, relevant, and impactful.</span>
          </h1>
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

        {/* Process Steps */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Step 1: Welcome */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Welcome! Would you like to...</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-2 border-gray-300 rounded-2xl p-6 text-center hover:border-gray-400 transition-colors">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Search and select off-the-shelf assessments
                </p>
              </div>
              <div className="border-2 border-gray-300 rounded-2xl p-6 text-center hover:border-gray-400 transition-colors">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Customize off-the-shelf assessments to make it your own
                </p>
              </div>
              <div className="border-2 border-primary rounded-2xl p-6 text-center bg-primary/5 hover:bg-primary/10 transition-colors">
                <p className="text-sm text-primary font-medium leading-relaxed">
                  Create your assessment from scratch
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Describe */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Describe the assessment you would like to build</h3>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                The Organizational Climate Assessment is a structured diagnostic tool designed to capture 
                employee perceptions and experiences across multiple dimensions of the workplace 
                environment. It evaluates the collective norms, values, behaviors, and systemic factors that shape 
                day-to-day employee experiences and influence organizational health.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-gray-300 hover:border-primary hover:text-primary"
                >
                  AI help me improve
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-gray-300 hover:border-primary hover:text-primary"
                >
                  AI suggest description
                </Button>
              </div>
            </div>
          </div>

          {/* Step 3: AI Assessment */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">AI-Powered Assessment Experience</h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <p className="text-sm font-medium text-gray-800">
                  Adaptive questioning based on your responses
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our AI guides participants through personalized assessments, adapting questions based on 
                responses for deeper insights and more relevant outcomes.
              </p>
            </div>
          </div>

          {/* Step 4: Reports */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Detailed Analysis & Reporting</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-green-800 mb-2">Understanding the Results</h4>
                <p className="text-xs text-green-700">
                  Your organization's overall culture score is 66%. A good foundation with room for growth.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Priority Areas Identified</h4>
                <div className="flex gap-2 mb-2">
                  <div className="bg-green-500 h-3 w-8 rounded"></div>
                  <div className="bg-blue-500 h-3 w-6 rounded"></div>
                  <div className="bg-yellow-500 h-3 w-5 rounded"></div>
                  <div className="bg-red-500 h-3 w-4 rounded"></div>
                </div>
                <p className="text-xs text-blue-700">
                  Three strongest areas (70%+) and improvement opportunities identified.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h4 className="text-sm font-semibold text-purple-800 mb-2">AI-Generated Action Plans</h4>
                <p className="text-xs text-purple-700">
                  Tailored recommendations based on your specific data and organizational context.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5: Implementation */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Drive Impact with AI Coaching</h3>
            <div className="text-center bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                As your AI coach, I'll guide you in implementing these actions step by step.
              </p>
              <p className="text-sm text-primary font-medium">
                What action would you like to work on first?
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gray-900 rounded-3xl py-16 px-8 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join the Future of Assessment
          </h2>
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

export default HowItWorks;