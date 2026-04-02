import SidebarNav from "@/components/SidebarNav";
import { SidebarProvider } from "@/components/SidebarContext";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <SidebarProvider>
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <QuoteSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  </SidebarProvider>
);

export default Index;
