import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function HomePage() {
  return (
    
    <main>
        <Navbar />
      <HeroSection />
        <FeaturesSection />
        <PricingSection />
         <TestimonialsSection />
         <NewsletterSection />
         <FAQSection />
         <CTASection />
         <Footer />
    </main>
  );
}
