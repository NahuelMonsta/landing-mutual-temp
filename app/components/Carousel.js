// app/components/Carousel.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/carrusel");
        const data = await res.json();
        if (Array.isArray(data)) {
          setImages(data);
        }
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      }
    };
    fetchImages();

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return <div>Cargando imágenes...</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={400} // Reducimos la altura base
              className="w-full h-[200px] md:h-[400px] object-cover" // Altura más chica en móviles
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}