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
        <p className="text-2xl white-title py-6">Crecemos con vos 💚</p>
      </section>

      <section className="text-center">
        <p className="text-2xl white-title py-6">CARRUSEL</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold white-title mb-6">Servicios que te Acompañan</h2>
        <p className="text-lg white-title mb-6">
          En la Mutual Riocuartense ofrecemos soluciones accesibles y efectivas para el cuidado de tu salud y bienestar. Contamos con dos planes diseñados para cubrir distintas necesidades:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan Capitados de Perpetual</h3>
            <p className="text-gray-700">
              Un servicio integral que incluye emergencias médicas, urgencias y enfermería, además de la cobertura completa de los servicios funerarios de Perpetual. Una solución pensada para brindarte tranquilidad en todo momento.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan de Salud con Descuentos</h3>
            <p className="text-gray-700">
              Un plan diseñado para quienes buscan una alternativa accesible sin las limitaciones de una obra social. Con una cuota mensual, accedés a descuentos exclusivos en salud sin preocuparte por preexistencias ni trámites engorrosos.
            </p>
          </div>
        </div>
        <p className="text-lg white-title mt-6">
          Nuestros planes están pensados para brindarte soluciones simples, económicas y sin complicaciones.
        </p>
      </section>
      <p>Texto con \"comillas\" sin escapar</p> {/* Línea 45 corregida */}

      {/* Beneficios */}
      <section id="beneficios" className="py-12 px-4 max-w-4xl mx-auto text-center bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold gradient-title mb-6">Beneficios Exclusivos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan de Salud</h3>
            <p className="text-gray-700 mb-4">Accedé a importantes descuentos en salud, incluyendo:</p>
            <ul className="text-gray-700 text-left space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> 50% de descuento en consultas médicas
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> 50% de descuento en farmacias
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> 30% de descuento en prácticas especializadas
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Descuento en servicios odontológicos
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> 30% de descuento en lentes recetados y de contacto
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> 15% de descuento en lentes de sol
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Obstetricia en el Instituto Médico
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Todos los servicios de Perpetual
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Emergencias, urgencias y enfermería a domicilio
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Un plan accesible, sin exclusiones por preexistencias y con beneficios reales para vos y tu familia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold gradient-title mb-4">Plan Capitados</h3>
            <p className="text-gray-700 mb-4">Incluye un servicio completo de asistencia médica y cobertura funeraria:</p>
            <ul className="text-gray-700 text-left space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Sala velatoria
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Servicio de sepultura
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Nivel de parcela
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Cremación
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Nicho
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Emergencias: Asistencia médica en el momento, donde estés
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Urgencias: Cuando hay riesgo de vida, va un médico a tu casa
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Enfermería a domicilio
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Médico a domicilio con co-seguro
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#F5874F] rounded-full mr-3"></span> Traslados
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Una cobertura diseñada para brindarte seguridad en los momentos que más lo necesitás.
            </p>
          </div>
        </div>
        <p className="mt-6 text-gray-600">Pronto, una app exclusiva para nuestros socios.</p>
      </section>

      {/* Carrusel */}
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
            <div>
              <p className="text-gray-700">\"Excelente atención y descuentos.\" - María G.</p> {/* Línea 173 corregida */}
            </div>
            <div>
              <p className="text-gray-700">\"Siempre confiables en emergencias.\" - Juan P.</p> {/* Línea 176 corregida */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}