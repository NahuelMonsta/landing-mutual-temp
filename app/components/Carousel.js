// app/components/Carousel.js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const intervalRef = useRef(null);
  const isPaused = useRef(false);

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

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused.current) {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setTranslateX(0); // Resetea el desplazamiento manual
        }
      }, 5000); // 5 segundos fijos
    };

    startInterval();

    return () => clearInterval(intervalRef.current); // Limpia al desmontar
  }, [images.length]);

  const pauseInterval = () => {
    isPaused.current = true;
  };

  const resumeInterval = () => {
    setTimeout(() => {
      isPaused.current = false;
    }, 1000); // Reanuda después de 1 segundo
  };

  const handlePrev = () => {
    pauseInterval();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTranslateX(0); // Resetea el desplazamiento manual
    resumeInterval();
  };

  const handleNext = () => {
    pauseInterval();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTranslateX(0); // Resetea el desplazamiento manual
    resumeInterval();
  };

  const handleTouchStart = (e) => {
    pauseInterval();
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || startX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50; // Umbral para cambiar de slide
    if (translateX > threshold) {
      handlePrev();
    } else if (translateX < -threshold) {
      handleNext();
    } else {
      setTranslateX(0); // Vuelve a la posición actual si no pasa el umbral
    }
    resumeInterval();
  };

  if (images.length === 0) {
    return <div>Cargando imágenes...</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-mr-primary text-white p-2 rounded-full z-10 hover:bg-mr-secondary"
      >
        ◀
      </button>
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-mr-primary text-white p-2 rounded-full z-10 hover:bg-mr-secondary"
      >
        ▶
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              pauseInterval();
              setCurrentIndex(index);
              setTranslateX(0);
              resumeInterval();
            }}
          />
        ))}
      </div>
    </div>
  );
}