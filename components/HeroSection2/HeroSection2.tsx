"use client";

import Image from "next/image";
import { Container } from "../Container/Container";

export default function HeroSection2() {
  return (
    <section className="bg-black text-white px-6 py-24 md:py-32">
      <Container className="flex">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Текстовая часть */}
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.2] mb-6">
                Il mio decennale <br className="md:hidden" />
                esperienza — il <br className="hidden md:inline" />
                vostro risultato <br className="md:hidden" />
                naturale
              </h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-md">
                Sono un cosmetologo autorizzato con oltre dieci anni di
                esperienza, in grado di valorizzare la bellezza naturale e
                garantire cure durature. Lavoro con ogni cliente in modo
                individuale, scegliendo le procedure più adatte a voi.
              </p>
              <a
                href="#services"
                className="inline-block bg-[#0E4E34] text-white text-[11px] md:text-xs font-semibold py-2.5 px-6 md:py-3 md:px-10 rounded-full shadow-md hover:bg-[#0c3f2b] transition"
              >
                Visualizza i servizi
              </a>
            </div>

            {/* Фото */}
            <div className="w-full">
              <Image
                src="/hero2.jpg" // замените на свой путь
                alt="Cosmetologo"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
      </Container>
    </section>
  );
}
