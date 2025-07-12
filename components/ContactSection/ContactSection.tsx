"use client";

import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Container } from "../Container/Container";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="bg-gray-200 px-6">
      <Container className="h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: contact info + form */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 self-center">Contatti</h2>
            <p className="text-base text-gray-700 mb-2 self-center">
              juliasun.beauty@gmail.com
            </p>
            <p className="text-base text-gray-700 mb-6">+39 351 601 47 37</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-100 border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900"
                  placeholder="Il tuo nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-100 border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900"
                  placeholder="tuo@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-800 mb-1"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-100 border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 mb-4"
                  placeholder="+39 123 456 789"
                  required
                />
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <button
                  type="submit"
                  className="bg-[#0E4E34] text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-[#0c3f2b] transition"
                >
                  Prenota una consulenza
                </button>
                <span className="text-xs text-gray-500">
                  Inviando il modulo, acconsento al trattamento dei miei dati
                </span>
              </div>
            </form>
          </div>

          {/* Right: map embed + social icons */}
          <div className="w-full">
            <div className="w-full h-80 md:h-96 mb-6">
              <iframe
                src="https://maps.google.com/maps?q=43.5119722,10.6184167&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
            <div className="flex space-x-4 justify-start md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61578100057910"
                aria-label="Facebook"
                className="text-gray-700 hover:text-[#0E4E34]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/juliasunsecrets/"
                aria-label="Instagram"
                className="text-gray-700 hover:text-[#0E4E34]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
