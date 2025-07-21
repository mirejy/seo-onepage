// app/components/PhotoSlider.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

export default function PhotoSlider({ images }) {
  return (
    <section className="pt-16 pb-24 bg-white">
      {/* Заголовок */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Risultati
      </h2>

      {/* Мобильный слайдер */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden snap-start"
            >
              <img
                src={src}
                alt={`Risultato ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Три стрелочки под слайдером */}
        <div className="flex justify-center space-x-4 mt-6">
          {[...Array(3)].map((_, idx) => (
            <ChevronRight
              key={idx}
              size={24}
              className="text-black animate-bounce"
            />
          ))}
        </div>
      </div>

      {/* Десктоп — фото в ряд */}
      <div className="hidden md:flex md:justify-center md:space-x-6 px-6">
        {images.map((src, i) => (
          <div key={i} className="w-64 h-40 rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Risultato ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
