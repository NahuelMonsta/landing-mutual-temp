// app/beneficios/page.js
export const metadata = {
  title: "Beneficios - Mutual Riocuartense",
  description: "Promociones y beneficios exclusivos",
};

export default function Beneficios() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Beneficios</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700">
          Próximamente: Promociones exclusivas que también se verán en el carrusel.
        </p>
      </div>
    </main>
  );
}