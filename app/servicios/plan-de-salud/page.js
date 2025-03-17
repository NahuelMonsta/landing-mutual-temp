// app/servicios/plan-de-salud/page.js
import Link from "next/link";

export const metadata = {
  title: "Plan de Salud - Mutual Riocuartense",
  description: "Detalles del Plan de Salud con Descuentos",
};

export default function PlanDeSalud() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Plan de Salud con Descuentos</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-6">
          Nuestro Plan de Salud brinda acceso a una amplia red de prestaciones médicas con descuentos exclusivos, sin preexistencias ni requisitos de aportes, a través de convenios estratégicos con sanatorios, farmacias y centros médicos.
        </p>

        <h2 className="text-xl font-semibold gradient-title mb-4">¿Qué beneficios incluye?</h2>
        <div className="text-left text-gray-700 mb-6">
          <h3 className="font-semibold">Atención Médica</h3>
          <ul className="list-disc list-inside">
            <li>50% de descuento en consultas médicas en consultorios adheridos</li>
            <li>50% de descuento en estudios y prácticas especializadas</li>
            <li>Obstetricia en el Instituto Médico</li>
          </ul>

          <h3 className="font-semibold mt-4">Farmacias</h3>
          <ul className="list-disc list-inside">
            <li>50% de descuento en medicamentos en más de 30 farmacias adheridas</li>
          </ul>

          <h3 className="font-semibold mt-4">Servicios de Emergencias y Urgencias (incluido en Capitados 3)</h3>
          <ul className="list-disc list-inside">
            <li>Atención médica de urgencia y emergencia</li>
            <li>5 traslados sin costo dentro de Río Cuarto (los siguientes con coseguro)</li>
          </ul>

          <h3 className="font-semibold mt-4">Oftalmología y Óptica</h3>
          <ul className="list-disc list-inside">
            <li>30% de descuento en lentes recetados y de contacto</li>
          </ul>

          <h3 className="font-semibold mt-4">Odontología</h3>
          <ul className="list-disc list-inside">
            <li>Descuentos en tratamientos odontológicos</li>
          </ul>

          <h3 className="font-semibold mt-4">Servicios Funerarios</h3>
          <ul className="list-disc list-inside">
            <li>Cobertura de sala velatoria, sepultura, cremación y nicho en Cementerio Concepción (según el plan elegido)</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold gradient-title mb-4">¿Cómo acceder al Plan de Salud?</h2>
        <p className="text-gray-700 mb-2">Completá el formulario de inscripción.</p>
        <p className="text-gray-700 mb-2">Presentate con DNI en los centros adheridos para acceder a los descuentos.</p>
        <p className="text-gray-700 mb-6">
          Consultanos para conocer la cotización según tu edad y grupo familiar.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-mr-primary text-white py-2 px-4 rounded hover:bg-mr-secondary transition"
        >
          Consultar Ahora
        </Link>
      </div>
    </main>
  );
}