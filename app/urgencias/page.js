// app/urgencias/page.js
import Link from "next/link";

export const metadata = {
  title: "Urgencias - Mutual Riocuartense",
  description: "Servicios de emergencias, urgencias, traslados y enfermería a domicilio",
};

export default function Urgencias() {
  const servicios = [
    {
      title: "Emergencias Médicas",
      description: "Situaciones críticas que requieren atención inmediata porque comprometen la vida del paciente, como:",
      examples: [
        "Paro cardíaco",
        "Pérdida de conocimiento",
        "Dificultad respiratoria grave",
        "Accidentes graves",
      ],
      contact: "Llamar al 4620141 / 4642100",
    },
    {
      title: "Urgencias Médicas",
      description: "Problemas de salud que, sin ser una emergencia, requieren atención rápida para evitar complicaciones, como:",
      examples: [
        "Fiebres altas persistentes",
        "Dolores intensos",
        "Crisis asmáticas o alérgicas",
        "Heridas que necesitan sutura",
      ],
      contact: "Llamar al 4620141 / 4642100",
    },
    {
      title: "Traslados",
      description: "Brindamos traslados programados y de urgencia dentro del área de Río Cuarto. Hasta 5 traslados mensuales sin costo (los siguientes con coseguro).",
      examples: [],
      contact: "Llamar al 4620141 / 4642100",
    },
    {
      title: "Enfermería a Domicilio",
      description: "Atención profesional para procedimientos como:",
      examples: [
        "Aplicación de inyecciones",
        "Control de presión y glucosa",
        "Curaciones y cambios de vendajes",
      ],
      contact: "Llamar al 4629755",
    },
  ];

  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Emergencias, Urgencias y Traslados</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          A través de nuestro convenio con Perpetual, brindamos un servicio de atención inmediata en conjunto con la Sociedad Francesa, garantizando asistencia médica eficiente cuando más lo necesitás.
        </p>

        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-md shadow-sm flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{servicio.title}</h2>
              <p className="text-gray-700 italic mb-3">{servicio.description}</p>
              {servicio.examples.length > 0 && (
                <ul className="text-gray-700 text-left space-y-1 pl-4 list-disc mb-3">
                  {servicio.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              )}
              <p className="text-gray-800 font-semibold mt-2">{servicio.contact}</p>
            </div>
          ))}
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