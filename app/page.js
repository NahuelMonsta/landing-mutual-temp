// app/page.js
import Carousel from "./components/Carousel";
import Link from "next/link";

export const metadata = {
  title: "Mutual Riocuartense",
  description: "Landing page de Mutual Riocuartense",
};

export default function Home() {
  const testimonial1 = "\"Excelente atención y descuentos.\" - María G.";
  const testimonial2 = "\"Siempre confiables en emergencias.\" - Juan P.";

  return (
    <>
      <Carousel />
      <section id="servicios" className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold white-title mb-6">Servicios que te Acompañan</h2>
        <p className="text-lg white-title mb-6">
          En la Mutual Riocuartense ofrecemos soluciones accesibles y efectivas para el cuidado de tu salud y bienestar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/servicios/capitados" className="block bg-white shadow-lg p-6 rounded-lg hover:bg-gray-100 transition">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan Capitados de Perpetual</h3>
            <p className="text-gray-700">
              Un servicio integral que incluye emergencias médicas, urgencias y enfermería, además de la cobertura completa de los servicios funerarios de Perpetual.
            </p>
          </Link>
          <Link href="/servicios/plan-de-salud" className="block bg-white shadow-lg p-6 rounded-lg hover:bg-gray-100 transition">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan de Salud con Descuentos</h3>
            <p className="text-gray-700">
              Un plan diseñado para quienes buscan una alternativa accesible sin las limitaciones de una obra social.
            </p>
          </Link>
        </div>
      </section>
      {/* Resto del código igual */}
    </>
  );
}