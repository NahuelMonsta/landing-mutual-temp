// app/components/Formulario.js
"use client";

import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    interes: "",
    paraQuien: "",
    horario: "", // Se llena automáticamente
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Nombre: solo letras y espacios
    if (!formData.nombre || !/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "Ingresá un nombre válido (solo letras y espacios)";
    }

    // Edad: número entre 0 y 120
    if (!formData.edad || isNaN(formData.edad) || formData.edad < 0 || formData.edad > 120) {
      newErrors.edad = "Ingresá una edad válida (0-120)";
    }

    // Email: formato válido
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido";
    }

    // Teléfono: solo números, al menos 6 dígitos
    if (!formData.telefono || !/^\d{6,}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresá un teléfono válido (solo números, mínimo 6 dígitos)";
    }

    // Interés: requerido
    if (!formData.interes) {
      newErrors.interes = "Seleccioná un interés";
    }

    // Para quién: requerido
    if (!formData.paraQuien) {
      newErrors.paraQuien = "Seleccioná para quién es";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // No envía si hay errores
    }

    const horarioEnvio = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Cordoba",
    });
    const dataToSend = { ...formData, horario: horarioEnvio };

    try {
      const response = await fetch("/api/enviarFormulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Gracias por tu consulta. Nos comunicaremos contigo pronto.");
        setFormData({
          nombre: "",
          edad: "",
          email: "",
          telefono: "",
          interes: "",
          paraQuien: "",
          horario: "",
        });
        setErrors({});
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
        Consulta ahora sobre nuestros planes
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-gray-900 placeholder-gray-500"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
        </div>
        <div>
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            value={formData.edad}
            onChange={handleChange}
            required
            min="0"
            max="120"
            className="w-full p-2 border rounded text-gray-900 placeholder-gray-500"
          />
          {errors.edad && <p className="text-red-500 text-sm">{errors.edad}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-gray-900 placeholder-gray-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-gray-900 placeholder-gray-500"
          />
          {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
        </div>
        <div>
          <select
            name="interes"
            value={formData.interes}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-gray-900"
          >
            <option value="">Seleccionar Interés</option>
            <option value="Capitados">Capitados</option>
            <option value="Plan de Salud">Plan de Salud</option>
          </select>
          {errors.interes && <p className="text-red-500 text-sm">{errors.interes}</p>}
        </div>
        <div>
          <select
            name="paraQuien"
            value={formData.paraQuien}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-gray-900"
          >
            <option value="">¿Para quién es?</option>
            <option value="Para mí">Para mí</option>
            <option value="Para mi familia">Para mi familia</option>
            <option value="Para alguien más">Para alguien más</option>
          </select>
          {errors.paraQuien && <p className="text-red-500 text-sm">{errors.paraQuien}</p>}
        </div>
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