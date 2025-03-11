"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fechaCarga: "",
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    fechaNacimiento: "",
    sexo: "",
    estadoCivil: "",
    interes: "",
  });

  // Al montar el componente, asignamos la fecha actual
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      fechaCarga: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-4xl text-center py-6">
        <h1 className="text-3xl font-bold text-green-600">Mutual Riocuartense</h1>
        <p className="text-gray-700">
          Beneficios en salud, farmacias y más. Crecemos con vos 💚
        </p>
      </header>

      <section className="w-full max-w-md bg-white shadow-md rounded-lg p-6 my-6">
        <h2 className="text-xl font-semibold text-green-500 text-center">Consultanos</h2>
        <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
          {/* Fecha de carga (automática y deshabilitada) */}
          <label className="text-gray-700 text-lg mb-1">Fecha de carga:</label>
          <input name="fechaCarga" type="date" value={formData.fechaCarga} readOnly className="border p-3 rounded mb-3 text-lg bg-gray-100" />

          <input name="nombre" type="text" placeholder="Nombre completo" className="border p-3 rounded mb-3 text-lg" onChange={handleChange} />
          <input name="email" type="email" placeholder="Correo electrónico" className="border p-3 rounded mb-3 text-lg" onChange={handleChange} />
          <input name="telefono" type="tel" placeholder="Teléfono de contacto" className="border p-3 rounded mb-3 text-lg" onChange={handleChange} />
          <input name="ciudad" type="text" placeholder="Ciudad de residencia" className="border p-3 rounded mb-3 text-lg" onChange={handleChange} />

          {/* Fecha de nacimiento con label claro */}
          <label className="text-gray-700 text-lg mb-1">Fecha de nacimiento:</label>
          <input name="fechaNacimiento" type="date" className="border p-3 rounded mb-3 text-lg" onChange={handleChange} />

          <select name="sexo" className="border p-3 rounded mb-3 text-lg" onChange={handleChange}>
            <option value="">Seleccioná tu sexo</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
          </select>

          <select name="estadoCivil" className="border p-3 rounded mb-3 text-lg" onChange={handleChange}>
            <option value="">Seleccioná tu estado civil</option>
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Viudo">Viudo</option>
          </select>

          <select name="interes" className="border p-3 rounded mb-3 text-lg" onChange={handleChange}>
            <option value="">¿Para quién es el plan?</option>
            <option value="Para mí">Para mí solo</option>
            <option value="Para familia">Para toda la familia</option>
            <option value="Para hijos">Para mis hijos</option>
          </select>

          <button type="submit" className="bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600 text-lg">Enviar</button>
        </form>
      </section>
    </div>
  );
}
