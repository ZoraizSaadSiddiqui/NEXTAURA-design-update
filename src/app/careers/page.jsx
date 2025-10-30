// 'use client'
import BenefitsSection from "@/components/careers/BenefitsSection";
import CultureSection from "@/components/careers/CultureSection";
import JobsGrid from "@/components/careers/JobsGrid";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
  title: 'Careers - Savacy Technologies',
  description: 'Join our team at Savacy Technologies. Explore career opportunities in development, design, marketing, and more.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JobsGrid />
      <BenefitsSection />
      <CultureSection />
      <Footer />
    </main>
  );
}