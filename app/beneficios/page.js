// app/beneficios/page.js
import BeneficiosClient from "./BeneficiosClient";

export const metadata = {
  title: "Beneficios - Mutual Riocuartense",
  description: "Promociones y beneficios exclusivos para socios",
  openGraph: {
    title: "Beneficios - Mutual Riocuartense",
    description: "Descubrí las promociones y beneficios exclusivos para socios de la Mutual Riocuartense.",
    url: "https://mutualriocuartense.com/beneficios", // Ajustá con tu dominio real
    images: ["/BeneficiosImagenes/descuento-farmacias.jpg"],
  },
};

export default function Beneficios() {
  return <BeneficiosClient />;
}