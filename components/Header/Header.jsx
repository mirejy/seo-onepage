"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../Container/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 pt-8">
    <Container>
      <div className="flex items-center justify-between border-b border-black pb-10">
        {/* Логотип */}
        <h1 className="text-lg font-light leading-tight">
          Beauty Secrets JuliaSun
        </h1>

        {/* Навигация — Desktop */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold">
          <a href="#services" className="hover:underline">Servizi</a>
          <a href="https://www.instagram.com/juliasunsecrets/" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contatti</a>
        </nav>

        {/* Бургер — Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="flex flex-col items-center justify-center space-y-5 text-lg font-semibold py-10 md:hidden bg-white/90">
          <a href="#services" onClick={() => setIsOpen(false)}>Servizi</a>
          <a href="https://www.instagram.com/juliasunsecrets/" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contatti</a>
        </div>
      )}
    </Container>
    </header>
    
  );
}
