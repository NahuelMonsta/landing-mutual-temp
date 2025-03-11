import React from "react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-700">Consultas médicas y especialidades</p>
          </div>
          <div>
            <p className="text-gray-700">Descuentos en farmacias</p>
          </div>
          <div>
            <p className="text-gray-700">Emergencias y enfermería</p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-12 px-4 max-w-4xl mx-auto text-center bg-white bg-opacity-80">
        <h2 className="text-2xl font-semibold text-mr-primary mb-6">Nuestros Beneficios</h2>
        <ul className="text-gray-700 space-y-2">
          <li>✅ Descuentos en farmacias (50%)</li>
          <li>✅ Consultas médicas con descuento</li>
          <li>✅ Prácticas especializadas (30%)</li>
          <li>✅ Obstetricia en el Instituto Médico</li>
          <li>✅ Servicios de Perpetual</li>
          <li>✅ Emergencias, urgencias y enfermería a domicilio</li>
        </ul>
        <p className="mt-4 text-gray-600">¡Pronto nuestra app para vos!</p>
      </section>

      {/* Formulario y Testimonios */}
      <section id="contacto" className="py-12 px-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-mr-primary text-center mb-6">Consultanos</h2>
          <form action="https://docs.google.com/forms/d/e/[TU_FORM_ID]/formResponse" method="POST" className="flex flex-col gap-4">
            <input type="text" name="entry.987654321" placeholder="Nombre" className="border p-2 rounded" required />
            <input type="email" name="entry.456789123" placeholder="Email" className="border p-2 rounded" required />
            <input type="tel" name="entry.321654987" placeholder="Teléfono" className="border p-2 rounded" required />
            <input type="text" name="entry.654321789" placeholder="Ciudad" className="border p-2 rounded" required />
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
