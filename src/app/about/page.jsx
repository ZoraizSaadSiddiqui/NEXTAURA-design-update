import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/about/cta-section";
import MissionVision from "@/components/about/mission-vision";
import StatsSection from "@/components/about/states-section";
import TechnologyStack from "@/components/about/technology-stack";
import ValuesSection from "@/components/about/value-section";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
  title: "About Us - NextAura",
  description:
    "Learn about ${}NextAura — a software company dedicated to creating innovative websites, apps, and digital solutions. Discover our mission, values, and the team behind powerful SEO, UI/UX, and design experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      {/* <TeamSection /> */}
      <StatsSection />
      <TechnologyStack />
      <CTASection />
      <Footer />
    </main>
  );
}
