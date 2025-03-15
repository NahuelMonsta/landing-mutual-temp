"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import { useState } from "react";
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

  return (
    <html lang="es">
      <body className={`${montserrat.variable} with-png flex flex-col min-h-screen`}>
        <header className="fixed top-0 left-0 w-full bg-mr-primary shadow-md z-10 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/LogosImagenes/logocompleto.png"
                alt="Mutual Riocuartense"
                width={300}
                height={57}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`text-white hover:text-mr-secondary ${pathname.startsWith("/servicios") ? "font-bold" : ""}`}
              >
                Servicios
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 bg-mr-primary text-white rounded-md shadow-lg mt-2">
                  <Link href="/servicios/capitados" className="block px-4 py-2 hover:bg-mr-secondary">
                    Capitados
                  </Link>
                  <Link href="/servicios/plan-de-salud" className="block px-4 py-2 hover:bg-mr-secondary">
                    Plan de Salud
                  </Link>
                </div>
              )}
            </div>
            <a href="/beneficios" className={`text-white hover:text-mr-secondary ${pathname === "/beneficios" ? "font-bold" : ""}`}>
              Beneficios
            </a>
            <a href="/farmacias" className={`text-white hover:text-mr-secondary ${pathname === "/farmacias" ? "font-bold" : ""}`}>
              Farmacias
            </a>
            <a href="/urgencias" className={`text-white hover:text-mr-secondary ${pathname === "/urgencias" ? "font-bold" : ""}`}>
              Urgencias
            </a>
            <a href="/#contacto" className={`text-white hover:text-mr-secondary ${pathname === "/" && pathname.includes("#contacto") ? "font-bold" : ""}`}>
              Contacto
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com/MutualRiocuartense/" target="_blank" rel="noopener noreferrer">
              <Image src="/LogosImagenes/facebookNegro.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/mutualriocuartense/" target="_blank" rel="noopener noreferrer">
              <Image src="/LogosImagenes/instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://wa.me/543584637428" target="_blank" rel="noopener noreferrer">
              <Image src="/LogosImagenes/whatsapp.png" alt="WhatsApp" width={24} height={24} />
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ≡
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 w-full bg-mr-primary flex flex-col items-center space-y-4 py-4">
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`text-white hover:text-mr-secondary ${pathname.startsWith("/servicios") ? "font-bold" : ""}`}
                  >
                    Servicios
                  </button>
                  {isServicesOpen && (
                    <div className="flex flex-col items-center space-y-2 mt-2">
                      <Link href="/servicios/capitados" className="text-white hover:text-mr-secondary" onClick={() => setIsMenuOpen(false)}>
                        Capitados
                      </Link>
                      <Link href="/servicios/plan-de-salud" className="text-white hover:text-mr-secondary" onClick={() => setIsMenuOpen(false)}>
                        Plan de Salud
                      </Link>
                    </div>
                  )}
                </div>
                <a href="/beneficios" className={`text-white hover:text-mr-secondary ${pathname === "/beneficios" ? "font-bold" : ""}`} onClick={() => setIsMenuOpen(false)}>
                  Beneficios
                </a>
                <a href="/farmacias" className={`text-white hover:text-mr-secondary ${pathname === "/farmacias" ? "font-bold" : ""}`} onClick={() => setIsMenuOpen(false)}>
                  Farmacias
                </a>
                <a href="/urgencias" className={`text-white hover:text-mr-secondary ${pathname === "/urgencias" ? "font-bold" : ""}`} onClick={() => setIsMenuOpen(false)}>
                  Urgencias
                </a>
                <a href="/#contacto" className={`text-white hover:text-mr-secondary ${pathname === "/" && pathname.includes("#contacto") ? "font-bold" : ""}`} onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </a>
              </nav>
            )}
          </div>
        </header>
        <main className="flex-grow pt-20">{children}</main>
        {/* Footer igual */}
      </body>
    </html>
  );
}