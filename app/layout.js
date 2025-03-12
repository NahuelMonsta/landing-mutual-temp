"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="es">
      <body className={`${montserrat.variable} with-png flex flex-col min-h-screen`}>
        {/* Encabezado fijo */}
        <header className="fixed top-0 left-0 w-full bg-mr-primary shadow-md z-10 p-4 flex justify-between items-center">
          {/* Logo a la izquierda */}
          <div className="flex items-center">
            <img src="/LogosImagenes/logocompleto.png" alt="Mutual Riocuartense" className="h-12" />
          </div>

          {/* Menú desktop centrado */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            <a href="#servicios" className="text-white hover:text-mr-secondary">Servicios</a>
            <a href="#beneficios" className="text-white hover:text-mr-secondary">Beneficios</a>
            <a href="#contacto" className="text-white hover:text-mr-secondary">Contacto</a>
            <a href="https://wa.me/543584637428" className="text-white">+54 358 463-7428</a>
          </nav>

          {/* Íconos de redes a la derecha */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com/MutualRiocuartense/" target="_blank" rel="noopener noreferrer">
              <img src="/LogosImagenes/facebookNegro.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://www.instagram.com/mutualriocuartense/" target="_blank" rel="noopener noreferrer">
              <img src="/LogosImagenes/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="https://wa.me/543584637428" target="_blank" rel="noopener noreferrer">
              <img src="/LogosImagenes/whatsapp.png" alt="WhatsApp" className="h-6" />
            </a>
          </div>

          {/* Botón y menú móvil */}
          <div className="md:hidden">
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ≡
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 w-full bg-mr-primary flex flex-col items-center space-y-4 py-4">
                <a href="#servicios" className="text-white hover:text-mr-secondary" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                <a href="#beneficios" className="text-white hover:text-mr-secondary" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
                <a href="#contacto" className="text-white hover:text-mr-secondary" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                <a href="https://wa.me/543584637428" className="text-white" onClick={() => setIsMenuOpen(false)}>+54 358 463-7428</a>
              </nav>
            )}
          </div>
        </header>

        {/* Contenido dinámico */}
        <main className="flex-grow pt-20">{children}</main>

        {/* Pie de página */}
        <footer className="bg-mr-primary text-white py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center">
              <img src="/LogosImagenes/LogoMutuBco.png" alt="Mutual" className="h-12 mb-2" />
              <p>Belgrano 17, piso 11, Río Cuarto, Argentina</p>
              <p>+54 358 463-7428</p>
              <p>mutuallariocuartense@gmail.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/LogosImagenes/PerpetualBco.png" alt="Perpetual" className="h-12 mb-2" />
              <p>Alvear 1450, Centro, X5800BES Río Cuarto, Córdoba</p>
              <p>0358 464-0404</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/LogosImagenes/privelBco.png" alt="Privel" className="h-12 mb-2" />
              <p>Sanatorio privado</p>
              <p>Bv. General Roca, Centro 949</p>
              <p>0358 467-5800</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}