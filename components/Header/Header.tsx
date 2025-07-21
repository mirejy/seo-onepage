"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../Container/Container";
import Link from "next/link";

interface HeaderInterface {
  main: boolean;
}

export default function Header({ main }: HeaderInterface) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full z-30 pt-8 text-black"
      style={{ color: "#000" }} // инлайн‑фолбэк для всех потомков
    >
      <Container>
        <div className="flex items-center justify-between border-b border-black pb-10">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-lg font-light leading-tight text-black">
              Beauty Secrets JuliaSun
            </h1>
          </Link>

          {main && (
            <>
              <nav className="hidden md:flex space-x-8 text-base font-semibold text-black">
                <a href="#services" className="hover:underline">
                  Servizi
                </a>
                <a
                  href="https://www.instagram.com/juliasunsecrets/"
                  className="hover:underline"
                >
                  Portfolio
                </a>
                <a href="#contact" className="hover:underline">
                  Contatti
                </a>
                <a href="/service" className="hover:underline">
                  3‑zone Botox
                </a>
              </nav>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-black"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </>
          )}
        </div>

        {isOpen && (
          <div className="flex flex-col items-center justify-center space-y-5 text-lg font-semibold py-10 md:hidden bg-white/90 text-black">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Servizi
            </a>
            <a
              href="https://www.instagram.com/juliasunsecrets/"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contatti
            </a>
            <a href="/service" onClick={() => setIsOpen(false)}>
              3‑zone Botox
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}
