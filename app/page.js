// app/page.js
import Link from "next/link";
import Carousel from "/app/components/Carousel.js";
import Formulario from "/app/components/Formulario.js";

export const metadata = {
  title: "Mutual Riocuartense - Beneficios en Salud que Cumplen",
  description: "Una mutual de Río Cuarto que ofrece soluciones reales en salud, sin letra chica",
};

export default function Home() {
  return (
    <main className="text-gray-900">
      <section className="pt-28 pb-16 px-6 md:px-12 text-center bg-gradient-to-r from-mr-primary via-mr-secondary to-mr-primary text-white relative overflow-hidden border-b-4 border-white/20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg uppercase">
            Una mutual que está presente, que cumple y que piensa en su gente
          </h1>
          <p className="text-base md:text-lg mb-6 drop-shadow-md">
            En la Mutual Riocuartense, hacemos las cosas simples y claras. Brindamos beneficios en salud que realmente funcionan, sin vueltas ni letra chica. Estamos cerca de nuestros socios, ofreciendo descuentos en consultas, farmacias y servicios esenciales, porque entendemos lo que necesitan.
          </p>
          <p className="text-base md:text-lg mb-8 drop-shadow-md">
            Somos de Río Cuarto, conocemos a nuestra gente y cumplimos con lo que prometemos. Acá no hay sorpresas, solo soluciones reales para cuidar tu bienestar y el de tu familia.
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-white text-mr-primary py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg"
          >
            Consultá Ahora
          </Link>
        </div>
      </section>

      <Carousel />

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold gradient-title mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">DESCUENTOS EN FARMACIAS</h3>
              <p className="text-gray-700">50% off en medicamentos en más de 30 farmacias adheridas.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">EMERGENCIAS CUBIERTAS</h3>
              <p className="text-gray-700">Atención médica inmediata y traslados sin costo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">PLANES FLEXIBLES</h3>
              <p className="text-gray-700">Opciones para vos, tu familia o seres queridos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold gradient-title mb-6">Qué dicen nuestros socios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700 mb-2">
                «Gracias a Mutual Riocuartense, tengo tranquilidad y ahorro todos los meses.»
              </p>
              <p className="font-semibold text-gray-800">María G. - Río Cuarto</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700 mb-2">
                «El servicio de emergencias me salvó en un momento crítico. Excelente atención.»
              </p>
              <p className="font-semibold text-gray-800">Juan P. - Las Higueras</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4">
        <Formulario />
      </section>
    </main>
  );
}