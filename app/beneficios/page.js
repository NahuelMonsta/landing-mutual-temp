// app/beneficios/page.js
import Image from "next/image";

export const metadata = {
  title: "Beneficios - Mutual Riocuartense",
  description: "Promociones y beneficios exclusivos para socios",
};

export default function Beneficios() {
  const beneficios = [
    {
      title: "Kinesiología",
      description: "Sesiones con descuento para socios en centros adheridos de Río Cuarto.",
      category: "Salud",
      image: "/LogosImagenes/kinesiologia.png", // Ajustá el nombre/path según tu imagen real
    },
    {
      title: "Perfumería",
      description: "Hasta 20% off en productos de cuidado personal en tiendas asociadas.",
      category: "Bienestar",
      image: "/LogosImagenes/perfumeria.png", // Ajustá el nombre/path según tu imagen real
    },
    {
      title: "Descuentos en Farmacias",
      description: "50% off en medicamentos en más de 30 farmacias adheridas.",
      category: "Salud",
      image: "/LogosImagenes/farmacia.png", // Placeholder, cambiá si tenés una real
    },
    {
      title: "Emergencias Cubiertas",
      description: "Atención médica inmediata y traslados sin costo.",
      category: "Salud",
      image: "/LogosImagenes/emergencias.png", // Placeholder, cambiá si tenés una real
    },
    {
      title: "Planes Flexibles",
      description: "Opciones para vos, tu familia o seres queridos.",
      category: "Salud",
      image: "/LogosImagenes/planes.png", // Placeholder, cambiá si tenés una real
    },
  ];

  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Beneficios</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          Descubrí las promociones y beneficios exclusivos para socios de la Mutual Riocuartense.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm flex flex-col items-center">
              <Image
                src={beneficio.image}
                alt={beneficio.title}
                width={80}
                height={80}
                loading="lazy"
                className="mb-4 object-contain"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{beneficio.title}</h2>
              <p className="text-gray-700">{beneficio.description}</p>
              <p className="text-sm text-gray-500 mt-2">Categoría: {beneficio.category}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}