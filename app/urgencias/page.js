// app/urgencias/page.js
import Link from "next/link";

export const metadata = {
  title: "Urgencias - Mutual Riocuartense",
  description: "Servicios de emergencias, urgencias, traslados y enfermería a domicilio",
};

export default function Urgencias() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Emergencias, Urgencias y Traslados</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          A través de nuestro convenio con Perpetual, brindamos un servicio de atención inmediata en conjunto con la Sociedad Francesa, garantizando asistencia médica eficiente cuando más lo necesitás.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-8">
            {/* Emergencias Médicas */}
            <div>
              <h2 className="text-2xl font-semibold gradient-title mb-4">Emergencias Médicas</h2>
              <p className="text-gray-700 mb-4 italic">
                Situaciones críticas que requieren atención inmediata porque comprometen la vida del paciente, como:
              </p>
              <ul className="text-gray-700 text-left space-y-2 pl-4 list-disc">
                <li>Paro cardíaco</li>
                <li>Pérdida de conocimiento</li>
                <li>Dificultad respiratoria grave</li>
                <li>Accidentes graves</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Llamar al 4620141 / 4642100</strong>
              </p>
            </div>

            {/* Traslados */}
            <div>
              <h2 className="text-2xl font-semibold gradient-title mb-4">Traslados</h2>
              <p className="text-gray-700 mb-4 italic">
                Brindamos traslados programados y de urgencia dentro del área de Río Cuarto.
              </p>
              <p className="text-gray-700 text-left">
                Hasta 5 traslados mensuales sin costo (los siguientes con coseguro).
              </p>
              \n 
              \n 
              <p className="text-gray-700 mt-4">
                <strong>Llamar al 4620141 / 4642100</strong>
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            {/* Urgencias Médicas */}
            <div>
              <h2 className="text-2xl font-semibold gradient-title mb-4">Urgencias Médicas</h2>
              <p className="text-gray-700 mb-4 italic">
                Problemas de salud que, sin ser una emergencia, requieren atención rápida para evitar complicaciones, como:
              </p>
              <ul className="text-gray-700 text-left space-y-2 pl-4 list-disc">
                <li>Fiebres altas persistentes</li>
                <li>Dolores intensos</li>
                <li>Crisis asmáticas o alérgicas</li>
                <li>Heridas que necesitan sutura</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Llamar al 4620141 / 4642100</strong>
              </p>
            </div>

            {/* Enfermería a Domicilio */}
            <div>
              <h2 className="text-2xl font-semibold gradient-title mb-4">Enfermería a Domicilio</h2>
              <p className="text-gray-700 mb-4 italic">
                Atención profesional para procedimientos como:
              </p>
              <ul className="text-gray-700 text-left space-y-2 pl-4 list-disc">
                <li>Aplicación de inyecciones</li>
                <li>Control de presión y glucosa</li>
                <li>Curaciones y cambios de vendajes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Llamar al 4629755</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Cómo acceder */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold gradient-title mb-4">¿Cómo acceder al servicio?</h2>
          <p className="text-gray-700 mb-6">
            Presentate con tu DNI, aclarando que sos socio/a de Perpetual.
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-mr-primary text-white py-2 px-4 rounded hover:bg-mr-secondary transition"
          >
            Consultar Ahora
          </Link>
        </div>
      </div>
    </main>
  );
}