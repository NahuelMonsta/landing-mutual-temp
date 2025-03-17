// app/components/Carousel.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    fetch("/api/carrusel")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCarouselImages(data);
        } else {
          setCarouselImages(["/carrusel/fallback.jpg"]);
        }
      })
      .catch(() => setCarouselImages(["/carrusel/fallback.jpg"]));
  }, []);

  useEffect(() => {
    if (carouselImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handleTouchStart = (e) => {
    const x = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setTouchStart(x);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setTouchEnd(x);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 30;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      className="relative w-full h-[600px] overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {carouselImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Carrusel imagen ${index + 1}`}
          fill
          className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          quality={75}
          priority={index === 0}
        />
      ))}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl opacity-75 hover:opacity-100 transition"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl opacity-75 hover:opacity-100 transition"
      >
        ▶
      </button>
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