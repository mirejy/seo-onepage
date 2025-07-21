// app/components/PhotoSlider.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

export default function PhotoSlider({ images }) {
  return (
    <section className="pt-16 pb-24 bg-white">
      {/* Заголовок */}
      <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-12">
        Risultati
      </h2>

      <div className="relative">
        {/* единый контейнер: на мобилках — overflow-x-auto, на десктопе — видит все фото */}
        <div
          className="
            flex
            overflow-x-auto md:overflow-visible
            snap-x md:snap-none snap-mandatory
            space-x-6 px-6 md:px-0
            scrollbar-none
            md:justify-center 
          "
        >
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

        {/* три подсказочные стрелки только на мобилках */}
        <div className="flex justify-center space-x-4 mt-6 md:hidden">
          {[...Array(3)].map((_, idx) => (
            <ChevronRight
              key={idx}
              size={24}
              className="text-black animate-bounce"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
