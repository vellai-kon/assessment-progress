import Navigation from "@/components/Navigation";
import AssessHero from "@/components/AssessHero";
import AssessFeatures from "@/components/AssessFeatures";
import InteractiveSection from "@/components/InteractiveSection";
import ValueProposition from "@/components/ValueProposition";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AssessHero />
      <AssessFeatures />
      <InteractiveSection />
      <ValueProposition />
      <Footer />
    </main>
  );
};

export default Index;
