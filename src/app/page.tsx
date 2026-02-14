import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutSection />
      <ProductSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
