import { Container } from "../Container/Container";

// app/components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Container className="h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }} // ← путь к твоей картинке
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/40 hero-bg pointer-events-none" />
          <div className="absolute inset-0 bg-white/60 hero-bg pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl max-w-md font-medium mb-8 text-black">
            Il tuo aspetto — la tua <br className="md:hidden" /> scelta
          </h1>
          <a href="#contact">
          <button
            className="bg-[#0E4E34] text-white text-xs md:text-sm font-semibold py-3 px-8 md:px-12 rounded-full hover:bg-[#0c3f2b] transition"
          >
            Prenota una consulenza
          </button>
          </a>
        </div>
      </Container>
    </section>
  );
}
