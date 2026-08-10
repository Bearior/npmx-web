import Banner from "@/components/Banner";
import BuildSpotlight from "@/components/BuildSpotlight";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <BuildSpotlight />
      <AboutSection />
      <ProductSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
