// app/urgencias/page.js
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
              <ul className="text-gray-700 text-left space-y-2 pl-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Paro cardíaco
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Pérdida de conocimiento
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Dificultad respiratoria grave
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Accidentes graves
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                📞 <strong>Llamar al 4620141 / 4642100</strong>
              </p>
            </div>

            {/* Traslados */}
            <div>
              <h2 className="text-2xl font-semibold gradient-title mb-4">Traslados</h2>
              <p className="text-gray-700 mb-4 italic">
                Brindamos traslados programados y de urgencia dentro del área de Río Cuarto.
              </p>
              <p className="text-gray-700">
                Hasta 5 traslados mensuales sin costo (los siguientes con coseguro).
              </p>
              <p className="text-gray-700 mt-4">
                📞 <strong>Llamar al 4620141 / 4642100</strong>
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
              <ul className="text-gray-700 text-left space-y-2 pl-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Fiebres altas persistentes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Dolores intensos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Crisis asmáticas o alérgicas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Heridas que necesitan sutura
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                📞 <strong>Llamar al 4620141 / 4642100</strong>
              </p>
            </div>

            {/* Enfermería a Domicilio */}
            <div>
              <h2 className="text-2xl font-semibold gradient-title mb-4">Enfermería a Domicilio</h2>
              <p className="text-gray-700 mb-4 italic">
                Atención profesional para procedimientos como:
              </p>
              <ul className="text-gray-700 text-left space-y-2 pl-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Aplicación de inyecciones
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Control de presión y glucosa
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F5874F] rounded-full mr-2"></span> Curaciones y cambios de vendajes
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                📞 <strong>Llamar al 4629755</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Cómo acceder */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold gradient-title mb-4">¿Cómo acceder al servicio?</h2>
          <p className="text-gray-700">
            Presentate con tu DNI, aclarando que sos socio/a de Perpetual.
          </p>
        </div>
      </div>
    </main>
  );
}