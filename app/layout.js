import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"], // Pesos normal y negrita que usaremos
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
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}