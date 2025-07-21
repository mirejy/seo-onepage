"use client";

import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Container } from "../Container/Container";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Messaggio inviato!");
      setForm({ name: "", email: "", phone: "" });
    } else {
      alert("Errore: " + (data.message ?? ""));
    }
  };

  return (
    <section id="contact" className="bg-gray-200 py-10">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Колонка с формой */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
              Prenota una consulenza
            </h2>

            {/* Соц-кнопки — видимы только на мобильных */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:hidden">
              <a
                href="https://www.facebook.com/profile.php?id=61578100057910"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition w-full sm:w-auto"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/juliasunsecrets/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition w-full sm:w-auto"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </div>

            <p className="text-base text-gray-700 mb-2 text-center md:text-left">
              juliasun.beauty@gmail.com
            </p>
            <p className="text-base text-gray-700 mb-6 text-center md:text-left">
              +39 351 601 47 37
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Il tuo nome"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tuo@email.com"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+39 123 456 789"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-900"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <button
                  type="submit"
                  className="bg-[#0E4E34] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#0c3f2b] transition mb-2 md:mb-0"
                >
                  Prenota una consulenza
                </button>
                <span className="text-xs text-gray-500 mt-2 md:mt-0 text-center md:text-left">
                  Inviando il modulo, acconsento al trattamento dei miei dati
                </span>
              </div>
            </form>
          </div>

          {/* Колонка с картой */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full h-64 md:h-96 mb-4">
              <iframe
                src="https://maps.google.com/maps?q=43.5119722,10.6184167&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Соц-кнопки — видимы только на desktop */}
            <div className="hidden md:flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61578100057910"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/juliasunsecrets/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
