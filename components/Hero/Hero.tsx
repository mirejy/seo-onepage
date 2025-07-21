// app/components/Hero.tsx
import { Container } from "../Container/Container";
import React from "react";

interface HeroProps {
  image?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Hero({
  image = "/images/hero.jpg",
  title,
  subtitle = "",
  buttonText = "",
  buttonLink = "#contact",
}: HeroProps) {
  return (
    <section className="relative h-screen w-full">
      <Container className="h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="absolute inset-0 bg-black/40 hero-bg pointer-events-none" />
          <div className="absolute inset-0 bg-white/60 hero-bg pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl max-w-md font-medium mb-4 text-black">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base md:text-lg max-w-lg mb-8 text-black/80">
              {subtitle}
            </p>
          )}

          {buttonText && (
            <a href={buttonLink}>
              <button className="bg-[#0E4E34] text-white text-xs md:text-sm font-semibold py-3 px-8 md:px-12 rounded-full hover:bg-[#0c3f2b] transition">
                {buttonText}
              </button>
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
