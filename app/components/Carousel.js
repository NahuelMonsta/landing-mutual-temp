// app/components/Carousel.js
"use client";

import { useState, useEffect } from "react";

export default function Carousel() {
  const carouselImages = [
    "/carrusel/imagen1.jpg",
    "/carrusel/imagen2.jpg",
    "/carrusel/imagen3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="relative w-full max-w-4xl mx-auto h-64 md:h-96 overflow-hidden">
      {carouselImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Carrusel imagen ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-mr-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}