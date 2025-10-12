import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CertificationsSection from "../components/CertificationsSection";
import ProjectsSection from "../components/ProjectsSection";
import FrameworksSection from "../components/FrameworksSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1220 100%)",
      }}
    >
      <Navigation />
      <HeroSection />
      <CertificationsSection />
      <ProjectsSection />
      <FrameworksSection />
      <Footer />
    </div>
  );
}
