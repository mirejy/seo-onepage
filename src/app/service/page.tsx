import Header from "../../../components/Header/Header"
import Hero from "../../../components/Hero/Hero"
import HeroSection2 from "../../../components/HeroSection2/HeroSection2"
import ContactSection from "../../../components/ContactSection/ContactSection"
import Footer from "../../../components/Footer/Footer"
import ServiceFeatures from "../../../components/ServiceFeatures/ServiceFeatures"
import PhotoSlider from "../../../components/PhotoSlider/PhotoSlider"
import PromoPrice from "../../../components/PromoPrice/PromoPrice"


import "../../../styles/globals.css"

export default function TreZone() {
  return (
    <>
      <Header main={false}/>
      <Hero title="Botox - 3 zone" subtitle="Trattamento rapido e sicuro per levigare le rughe sulla fronte" buttonText="Dettagli" buttonLink="#ServiceFeatures" />
      <ServiceFeatures />
      <PhotoSlider
        images={[
          "/images/botox-1.png",
          "/images/botox-2.jpg",
          "/images/botox-3.png",
          "/images/botox-4.jpg",
        ]} />
      <HeroSection2 />
      <PromoPrice />
      <ContactSection />
      <Footer />
    </>
  );
}
