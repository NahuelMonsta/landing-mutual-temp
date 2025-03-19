// app/farmacias/page.js
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Farmacias Adheridas - Mutual Riocuartense",
  description: "Más de 30 farmacias en Río Cuarto y la región con descuentos del 50% en medicamentos",
};

export default function Farmacias() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Farmacias Adheridas</h1>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8">
          Contamos con más de 30 farmacias adheridas en Río Cuarto y la región, donde podés acceder a un 50% de descuento en medicamentos recetados. Solo tenés que presentar tu carnet de socio y la receta médica para aprovechar este beneficio.
        </p>

        <p className="text-gray-700 mb-6">
          A continuación, te mostramos un mapa con la ubicación de todas las farmacias disponibles para que encuentres la más cercana.
        </p>

        {/* Mapa de Google */}
        <div className="w-full h-[400px] mb-8">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1HMvj9IxzOsJv8vGRlvxqVCZ0inFNq3s&hl=es&z=12"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Listado en JPG */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold gradient-title mb-4">Listado de Farmacias</h2>
          <Image
            src="/documentos/listado-de-farmacias.jpg"
            alt="Listado de farmacias adheridas"
            width={800}
            height={600}
            className="mx-auto rounded-lg"
            quality={85}
            loading="lazy"
          />
        </div>

        {/* Botón para descargar */}
        <Link
          href="/documentos/listado-de-farmacias.jpg"
          download="Listado de Farmacias Adheridas"
          className="inline-block bg-mr-primary text-white py-2 px-4 rounded hover:bg-mr-secondary transition"
        >
          Descargar Listado de Farmacias
        </Link>
      </div>
    </main>
  );
}