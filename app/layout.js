// app/layout.js
"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef(null);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const toggleServices = useCallback(() => setIsServicesOpen((prev) => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${montserrat.variable} with-png flex flex-col min-h-screen`}>
        <header className="fixed top-0 left-0 w-full bg-mr-primary shadow-md z-50 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Link href="/">
              <Image
                src="/LogosImagenes/logocompleto.png"
                alt="Mutual Riocuartense"
                width={300}
                height={57}
                className="cursor-pointer w-[240px] md:w-[300px]"
              />
            </Link>
          </div>
          <nav className="hidden md:flex flex-grow justify-end items-center space-x-4">
            <div className="relative" ref={servicesRef}>
              <button
                onClick={toggleServices}
                className={`text-white hover:text-mr-secondary ${
                  pathname.startsWith("/servicios") ? "font-bold" : ""
                }`}
              >
                Servicios
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 bg-mr-primary text-white rounded-md shadow-lg mt-2 opacity-100 transition-opacity duration-300">
                  <Link
                    href="/servicios/capitados"
                    className="block px-4 py-2 hover:bg-mr-secondary"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Plan Capitados
                  </Link>
                  <Link
                    href="/servicios/plan-de-salud"
                    className="block px-4 py-2 hover:bg-mr-secondary"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Plan de Salud
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/beneficios"
              className={`text-white hover:text-mr-secondary ${
                pathname === "/beneficios" ? "font-bold" : ""
              }`}
            >
              Beneficios
            </Link>
            <Link
              href="/farmacias"
              className={`text-white hover:text-mr-secondary ${
                pathname === "/farmacias" ? "font-bold" : ""
              }`}
            >
              Farmacias
            </Link>
            <Link
              href="/urgencias"
              className={`text-white hover:text-mr-secondary ${
                pathname === "/urgencias" ? "font-bold" : ""
              }`}
            >
              Urgencias
            </Link>
            <Link
              href="/#contacto"
              className={`text-white hover:text-mr-secondary ${
                pathname === "/" && pathname.includes("#contacto") ? "font-bold" : ""
              }`}
            >
              Contacto
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://facebook.com/MutualRiocuartense/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/LogosImagenes/facebookNegro.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/mutualriocuartense/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/LogosImagenes/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://wa.me/message/IOPTLGSVWTDNI1" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/LogosImagenes/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </nav>
          <div className="md:hidden">
            <button className="text-white text-2xl" onClick={toggleMenu}>
              ≡
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 w-full bg-mr-primary flex flex-col items-center space-y-4 py-4">
                <div>
                  <button
                    onClick={toggleServices}
                    className={`text-white hover:text-mr-secondary ${
                      pathname.startsWith("/servicios") ? "font-bold" : ""
                    }`}
                  >
                    Servicios
                  </button>
                  {isServicesOpen && (
                    <div className="flex flex-col items-center space-y-2 mt-2 transition-opacity duration-300">
                      <Link
                        href="/servicios/capitados"
                        className="text-white hover:text-mr-secondary"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        Plan Capitados
                      </Link>
                      <Link
                        href="/servicios/plan-de-salud"
                        className="text-white hover:text-mr-secondary"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        Plan de Salud
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/beneficios"
                  className={`text-white hover:text-mr-secondary ${
                    pathname === "/beneficios" ? "font-bold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Beneficios
                </Link>
                <Link
                  href="/farmacias"
                  className={`text-white hover:text-mr-secondary ${
                    pathname === "/farmacias" ? "font-bold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Farmacias
                </Link>
                <Link
                  href="/urgencias"
                  className={`text-white hover:text-mr-secondary ${
                    pathname === "/urgencias" ? "font-bold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Urgencias
                </Link>
                <Link
                  href="/#contacto"
                  className={`text-white hover:text-mr-secondary ${
                    pathname === "/" && pathname.includes("#contacto") ? "font-bold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </nav>
            )}
          </div>
        </header>
        <main className="flex-grow pt-20">{children}</main>
        {/* Íconos de redes antes del footer */}
        <div className="flex justify-center space-x-4 py-4 bg-white">
          <a href="https://facebook.com/MutualRiocuartense/" target="_blank" rel="noopener noreferrer">
            <Image src="/LogosImagenes/facebookNegro.png" alt="Facebook" width={32} height={32} />
          </a>
          <a href="https://www.instagram.com/mutualriocuartense/" target="_blank" rel="noopener noreferrer">
            <Image src="/LogosImagenes/instagram.png" alt="Instagram" width={32} height={32} />
          </a>
          <a href="https://wa.me/message/IOPTLGSVWTDNI1" target="_blank" rel="noopener noreferrer">
            <Image src="/LogosImagenes/whatsapp.png" alt="WhatsApp" width={32} height={32} />
          </a>
        </div>
        <footer className="bg-mr-primary text-white py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4 text-center">
            <div className="flex flex-col items-center min-w-[100px] flex-1">
              <Image
                src="/LogosImagenes/LogoMutuBco.png"
                alt="Mutual"
                width={80}
                height={80}
                className="mb-2 w-12 h-12 md:w-20 md:h-20 object-contain"
              />
              <p>Belgrano 17, piso 11</p>
              <p>Río Cuarto, Argentina</p>
              <p>
                <a href="tel:+543584018605" className="hover:underline">+54 358 401-8605</a>
              </p>
              <p>
                <a href="tel:+543585752094" className="hover:underline">+54 358 575-2094</a>
              </p>
              <p>mutuallariocuartense@gmail.com</p>
            </div>
            <div className="flex flex-col items-center min-w-[100px] flex-1">
              <Image
                src="/LogosImagenes/PerpetualBco.png"
                alt="Perpetual"
                width={100}
                height={100}
                className="mb-2 w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <p>Alvear 1450, Centro</p>
              <p>X5800BES Río Cuarto, Córdoba</p>
              <p>
                <a href="tel:+543584640404" className="hover:underline">+54 358 464-0404</a>
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[100px] flex-1">
              <Image
                src="/LogosImagenes/privelBco.png"
                alt="Privel"
                width={100}
                height={100}
                className="mb-2 w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <p>Sanatorio privado</p>
              <p>Bv. General Roca, Centro 949</p>
              <p>
                <a href="tel:+543584675800" className="hover:underline">+54 358 467-5800</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}