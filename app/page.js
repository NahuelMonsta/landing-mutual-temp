// app/page.js
import React from "react";

export const metadata = {
  title: "Mutual Riocuartense",
  description: "Landing page de Mutual Riocuartense",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="text-center">
        <p className="text-2xl text-gray-700 py-6">Crecemos con vos 💚</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-mr-primary mb-6">Nuestros Servicios</h2>
        <p className="text-lg text-gray-700 mb-6">
          En la Mutual Riocuartense trabajamos para brindarte opciones accesibles y efectivas para el cuidado de tu salud y bienestar. Contamos con dos planes diseñados para adaptarse a distintas necesidades:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-80 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-mr-primary mb-4">Plan Capitados de Perpetual</h3>
            <p className="text-gray-700">
              Un servicio integral que combina cobertura de emergencias médicas, urgencias y enfermería con los servicios funerarios de Perpetual, brindando tranquilidad y respaldo en todo momento.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-mr-primary mb-4">Plan de Salud con Descuentos</h3>
            <p className="text-gray-700">
              Pensado para quienes buscan una alternativa accesible sin las limitaciones de una obra social. Con una cuota mensual, accedés a importantes descuentos en distintos servicios de salud, sin preocuparte por preexistencias ni trámites engorrosos.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6">
          Nuestros planes están diseñados para ofrecerte soluciones simples, económicas y sin complicaciones.
        </p>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-12 px-4 max-w-4xl mx-auto text-center bg-white bg-opacity-80">
        <h2 className="text-2xl font-semibold text-mr-primary mb-6">Nuestros Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-4">
              Te ofrecemos un servicio con importantes descuentos en salud. Algunos de los beneficios que podés aprovechar son:
            </p>
            <ul className="text-gray-700 text-left space-y-2">
              <li>✅ 50% de descuento en consultas médicas</li>
              <li>✅ 50% de descuento en farmacias</li>
              <li>✅ 30% de descuento en prácticas especializadas</li>
              <li>✅ Descuento en servicios odontológicos</li>
              <li>✅ 30% de descuento en lentes recetados y de contacto</li>
              <li>✅ 15% de descuento en lentes de sol</li>
              <li>✅ Obstetricia en el Instituto Médico</li>
              <li>✅ Todos los servicios de Perpetual</li>
              <li>✅ Emergencias, urgencias y enfermería a domicilio</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Con este plan, accedés a una cobertura completa a través de una cuota accesible y sin exclusiones por preexistencias.
            </p>
          </div>
          <div>
            <p className="text-gray-700 mb-4">Capitados:</p>
            <ul className="text-gray-700 text-left space-y-2">
              <li>✅ Sala velatoria</li>
              <li>✅ Servicio de sepultura</li>
              <li>✅ Nivel de parcela</li>
              <li>✅ Cremación</li>
              <li>✅ Nicho</li>
              <li>✅ Emergencia: Asistencia médica en el momento, donde estés</li>
              <li>✅ Urgencia: Cuando hay riesgo de vida, va un médico a tu casa</li>
              <li>✅ Enfermería a domicilio</li>
              <li>✅ Médico a domicilio con co-seguro</li>
              <li>✅ Traslados</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Todo esto a un precio accesible, pensado para brindarte tranquilidad en situaciones difíciles.
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">¡Pronto nuestra app para vos!</p>
      </section>

      {/* Carrusel */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-mr-primary mb-6">Novedades</h2>
        <p className="text-gray-700">Próximamente: Novedades desde Instagram</p>
      </section>

      {/* Formulario y Testimonios */}
      <section id="contacto" className="py-12 px-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-mr-primary text-center mb-6">Consultanos</h2>
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
          <h2 className="text-xl font-semibold text-mr-primary text-center mb-6">Testimonios</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700">"Excelente atención y descuentos." - María G.</p>
            </div>
            <div>
              <p className="text-gray-700">"Siempre confiables en emergencias." - Juan P.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}