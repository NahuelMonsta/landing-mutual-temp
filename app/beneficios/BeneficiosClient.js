// app/beneficios/BeneficiosClient.js
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function BeneficiosClient() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const defaultImage = "/LogosImagenes/LogoMutuBco.png"; // Ruta corregida (asumiendo que está en /public/LogosImagenes/)

  const beneficios = [
    {
      title: "Descuentos en Farmacias",
      description: "50% off en medicamentos en más de 30 farmacias adheridas.",
      category: "Salud",
      image: "/BeneficiosImagenes/MedicamentosFarmacias.jpg",
    },
    {
      title: "Kinesiología y Estética",
      description: "En Kinesis (Constitución 560, planta baja, galería): tratamientos corporales y faciales.",
      category: "Salud y Bienestar",
      image: "/BeneficiosImagenes/KINESIOLOGIA_Y_ESTETICA.jpg",
    },
    {
      title: "Oftalmología",
      description: "30% de descuento en Bio Salud (Bolívar 167) y Sanatorio Privado (Bv. General Roca 949).",
      category: "Salud",
      image: "/BeneficiosImagenes/oftalmologia.jpg",
    },
    {
      title: "Emergencias Cubiertas",
      description: "Atención médica inmediata y traslados sin costo.",
      category: "Salud",
      image: defaultImage, // Usamos la imagen por defecto directamente
      originalImage: "/BeneficiosImagenes/emergencias.jpg", // Guardamos la original por referencia
    },
    {
      title: "Planes Flexibles",
      description: "Opciones para vos, tu familia o seres queridos.",
      category: "Salud",
      image: defaultImage, // Usamos la imagen por defecto directamente
      originalImage: "/BeneficiosImagenes/planes.jpg", // Guardamos la original por referencia
    },
  ];

  const toggleImageSize = (index) => {
    setEnlargedImage(enlargedImage === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleImageSize(index);
    }
  };

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setEnlargedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Beneficios</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          Descubrí las promociones y beneficios exclusivos para socios de la Mutual Riocuartense.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm flex flex-col items-center">
              <div
                onClick={() => toggleImageSize(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="button"
                tabIndex={0}
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-mr-primary"
              >
                <Image
                  src={beneficio.image}
                  alt={beneficio.title}
                  width={150}
                  height={100}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={defaultImage}
                  className="mb-4 object-contain rounded-md"
                  style={{ background: "linear-gradient(to right, #003087, #005EB8, #003087)" }} // Degradado como estilo inline
                  onError={(e) => {
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{beneficio.title}</h2>
              <p className="text-gray-700">{beneficio.description}</p>
              <p className="text-sm text-gray-500 mt-2">Categoría: {beneficio.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para la imagen ampliada */}
      {enlargedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={beneficios[enlargedImage].image}
              alt={beneficios[enlargedImage].title}
              width={500}
              height={300}
              className="object-contain mx-auto rounded-md"
              style={{ background: "linear-gradient(to right, #003087, #005EB8, #003087)" }} // Degradado como estilo inline
              onError={(e) => {
                e.target.src = defaultImage;
              }}
            />
            <p className="mt-4 text-gray-700 text-center">{beneficios[enlargedImage].description}</p>
          </div>
        </div>
      )}
    </main>
  );
}