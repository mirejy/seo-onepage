import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import HeroSection2 from "../../components/HeroSection2/HeroSection2"
import ServicesAccordion from "../../components/ServicesAccordion/ServicesAccordion"
import ContactSection from "../../components/ContactSection/ContactSection"
import Footer from "../../components/Footer/Footer"
import "../../styles/globals.css"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HeroSection2 />
      <ServicesAccordion />
      <ContactSection />
      <Footer />
    </>
  );
}
