// app/servicios/plan-de-salud/page.js
export const metadata = {
  title: "Plan de Salud - Mutual Riocuartense",
  description: "Detalles del Plan de Salud con Descuentos",
};

export default function PlanDeSalud() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Plan de Salud con Descuentos</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          Un plan diseñado para quienes buscan una alternativa accesible sin las limitaciones de una obra social.
        </p>
        <p className="text-gray-700">Más detalles próximamente...</p>
      </div>
    </main>
  );
}