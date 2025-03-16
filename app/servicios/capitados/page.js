export const metadata = {
  title: "Plan Capitados - Mutual Riocuartense",
  description: "Detalles del Plan Capitados de Perpetual",
};

export default function Capitados() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Plan Capitados de Perpetual</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          En convenio con Perpetual, ofrecemos tres niveles de Capitados, para que en los momentos más difíciles nosotros nos hagamos cargo de todo, sin ningún costo adicional.
        </p>

        <div className="text-left text-gray-700 mb-8">
          <h2 className="text-xl font-semibold gradient-title mb-4">Capitados 1</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Servicio de sala velatoria</li>
            <li>Servicio de sepultura</li>
            <li>Nivel de parcela</li>
            <li>Cremación</li>
            <li>Nivel de parcela cineraria</li>
            <li>Nicho en Cementerio Concepción (por 3 años)</li>
          </ul>
        </div>

        <div className="text-left text-gray-700 mb-8">
          <h2 className="text-xl font-semibold gradient-title mb-4">Capitados 2</h2>
          <p className="mb-2">Incluye todo lo del Capitados 1, más:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Servicio de enfermería a domicilio</li>
          </ul>
        </div>

        <div className="text-left text-gray-700 mb-8">
          <h2 className="text-xl font-semibold gradient-title mb-4">Capitados 3</h2>
          <p className="mb-2">Incluye todo lo del Capitados 2, más:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Emergencias y urgencias médicas</li>
            <li>Cinco traslados por mes sin costo dentro del área de Río Cuarto (los siguientes con coseguro)</li>
            <li>Consultas médicas a domicilio con coseguro</li>
          </ul>
        </div>

        <p className="text-gray-700 text-center">
          Para más información y afiliación, comunicate con nosotros.
        </p>
      </div>
    </main>
  );
}