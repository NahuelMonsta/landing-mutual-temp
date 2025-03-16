// app/contacto/page.js
import Formulario from "../components/Formulario";

export const metadata = {
  title: "Contacto - Mutual Riocuartense",
  description: "Formulario de contacto para consultas",
};

export default function Contacto() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold white-title mb-8">Contacto</h1>
      <Formulario />
    </main>
  );
}