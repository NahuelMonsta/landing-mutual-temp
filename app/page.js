// app/page.js
import Carousel from "./components/Carousel";

export const metadata = {
  title: "Mutual Riocuartense",
  description: "Landing page de Mutual Riocuartense",
};

export default function Home() {
  const testimonial1 = "\"Excelente atención y descuentos.\" - María G.";
  const testimonial2 = "\"Siempre confiables en emergencias.\" - Juan P.";

  return (
    <>
      {/* Hero */}
      <section className="text-center py-12">
        <p className="text-2xl white-title py-6">Crecemos con vos 💚</p>
      </section>

      {/* Carrusel */}
      <Carousel />

      {/* Servicios */}
      <section id="servicios" className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold white-title mb-6">Servicios que te Acompañan</h2>
        <p className="text-lg white-title mb-6">
          En la Mutual Riocuartense ofrecemos soluciones accesibles y efectivas para el cuidado de tu salud y bienestar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan Capitados de Perpetual</h3>
            <p className="text-gray-700">
              Un servicio integral que incluye emergencias médicas, urgencias y enfermería, además de la cobertura completa de los servicios funerarios de Perpetual.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan de Salud con Descuentos</h3>
            <p className="text-gray-700">
              Un plan diseñado para quienes buscan una alternativa accesible sin las limitaciones de una obra social.
            </p>
          </div>
        </div>
        <a
          href="/beneficios"
          className="inline-block mt-8 bg-white text-mr-primary py-2 px-6 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition"
        >
          Conocer Más
        </a>
      </section>

      {/* Novedades */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold white-title mb-6">Novedades</h2>
        <p className="text-gray-700 white-title">Próximamente: Novedades desde Instagram</p>
      </section>

      {/* Formulario y Testimonios */}
      <section id="contacto" className="py-12 px-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg">
          <h2 className="text-xl font-semibold gradient-title text-center mb-6">Consultanos</h2>
          <form
            action="https://docs.google.com/forms/d/e/[TU_FORM_ID]/formResponse"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="date" name="entry.123456789" className="border p-2 rounded" required />
            <input type="text" name="entry.987654321" placeholder="Nombre" className="border p-2 rounded" required />
            <input type="email" name="entry.456789123" placeholder="Email" className="border p-2 rounded" required />
            <input type="tel" name="entry.321654987" placeholder="Teléfono" className="border p-2 rounded" required />
            <input type="text" name="entry.654321789" placeholder="Ciudad" className="border p-2 rounded" required />
            <input type="date" name="entry.789123456" className="border p-2 rounded" required />
            <select name="entry.147258369" className="border p-2 rounded" required>
              <option value="">Seleccioná tu sexo</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </select>
            <input type="text" name="entry.258369147" placeholder="Estado civil" className="border p-2 rounded" required />
            <select name="entry.369147258" className="border p-2 rounded" required>
              <option value="">Seleccioná tu interés</option>
              <option value="Es para mí solo">Es para mí solo</option>
              <option value="Es para toda la familia">Es para toda la familia</option>
              <option value="Es para mis hijos">Es para mis hijos</option>
            </select>
            <button type="submit" className="bg-mr-primary text-white py-2 rounded hover:bg-mr-secondary">
              Enviar
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold gradient-title text-center mb-6">Testimonios</h2>
          <div className="space-y-4">
            <div><p className="text-gray-700">{testimonial1}</p></div>
            <div><p className="text-gray-700">{testimonial2}</p></div>
          </div>
        </div>
      </section>
    </>
  );
}