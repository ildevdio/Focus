import HeaderNav from "@/components/HeaderNav";
import SidebarNav from "@/components/SidebarNav";
import { SidebarProvider, useSidebarPosition } from "@/components/SidebarContext";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import QuoteSection from "@/components/QuoteSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const NavSelector = () => {
  const { navMode } = useSidebarPosition();
  return navMode === "header" ? <HeaderNav /> : <SidebarNav />;
};

const IndexContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="hidden lg:block">
        <HeaderNav />
      </div>
      <div className="lg:hidden">
        <SidebarNav />
      </div>
      <main className="lg:pt-20">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <QuoteSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

const Index = () => (
  <SidebarProvider>
    <IndexContent />
  </SidebarProvider>
);

export default Index;
