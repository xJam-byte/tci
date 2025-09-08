import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CasesSection } from './components/CasesSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <CasesSection />
        <ProcessSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}