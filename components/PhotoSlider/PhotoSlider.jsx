// app/components/PhotoSlider.jsx
import React from "react";

export default function PhotoSlider({ images }) {
  return (
    // Задаём побольше паддингов сверху и снизу: pt-16 (4rem), pb-24 (6rem)
    <section className="pt-16 pb-35 bg-white">
      {/* Заголовок */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Risultati
      </h2>

      {/* Мобильный слайдер */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory space-x-6 px-6">
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
