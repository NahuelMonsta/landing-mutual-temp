import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Mutual Riocuartense",
  description: "Landing page de Mutual Riocuartense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} with-png flex flex-col min-h-screen`}>
        {/* 🔹 Header global */}
        <header className="fixed top-0 left-0 w-full bg-mr-primary shadow-md z-10 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/LogosImagenes/logocompleto.png" alt="Mutual Riocuartense" className="h-12 mr-2" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#servicios" className="text-white hover:text-mr-secondary">Servicios</a>
            <a href="#beneficios" className="text-white hover:text-mr-secondary">Beneficios</a>
            <a href="#contacto" className="text-white hover:text-mr-secondary">Contacto</a>
            <a href="https://wa.me/123456789" className="text-white">+54 123 456 789</a>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">☰</button>
          </div>
        </header>

        {/* 🔹 Contenido dinámico */}
        <main className="flex-grow pt-20">{children}</main>

        {/* 🔹 Footer global */}
        <footer className="bg-mr-primary text-white py-6 text-center flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <img src="/LogosImagenes/LogoMutuBco.png" alt="Mutual" className="h-12" />
            <img src="/LogosImagenes/PerpetualBco.png" alt="Perpetual" className="h-12" />
            <img src="/LogosImagenes/privelBco.png" alt="Privel" className="h-12" />
          </div>
          <p>Mutual Riocuartense - +54 123 456 789 - <a href="https://wa.me/123456789" className="underline">WhatsApp</a> - info@mutualriocuartense.com</p>
        </footer>
      </body>
    </html>
  );
}
