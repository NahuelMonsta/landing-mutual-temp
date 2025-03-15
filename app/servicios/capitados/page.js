// app/servicios/capitados/page.js
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
          Un servicio integral que incluye emergencias médicas, urgencias y enfermería, además de la cobertura completa de los servicios funerarios de Perpetual.
        </p>
        <p className="text-gray-700">Más detalles próximamente...</p>
      </div>
    </main>
  );
}