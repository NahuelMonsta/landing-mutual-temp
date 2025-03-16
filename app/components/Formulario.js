// app/components/Formulario.js
"use client";

import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    fechaNacimiento: "",
    sexo: "",
    estadoCivil: "",
    interes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/enviarFormulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formulario enviado con éxito");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          ciudad: "",
          fechaNacimiento: "",
          sexo: "",
          estadoCivil: "",
          interes: "",
        });
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el formulario");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold gradient-title text-center mb-6">
        Consulta sobre el Plan de Salud
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y Apellido"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar Sexo</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
        </select>
        <select
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar Estado Civil</option>
          <option value="Soltero">Soltero/a</option>
          <option value="Casado">Casado/a</option>
          <option value="Divorciado">Divorciado/a</option>
          <option value="Viudo">Viudo/a</option>
        </select>
        <select
          name="interes"
          value={formData.interes}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar Interés</option>
          <option value="Personal">Es para mí</option>
          <option value="Familiar">Es para toda la familia</option>
          <option value="Hijos">Es para mis hijos</option>
        </select>
        <button
          type="submit"
          className="w-full bg-mr-primary text-white p-2 rounded hover:bg-mr-secondary"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}