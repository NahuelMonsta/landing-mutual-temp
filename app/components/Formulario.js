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
    horario: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre || !/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "Ingresá un nombre válido (solo letras y espacios)";
    }
    if (!formData.edad || isNaN(formData.edad) || formData.edad < 0 || formData.edad > 120) {
      newErrors.edad = "Ingresá una edad válida (0-120)";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido";
    }
    if (!formData.telefono || !/^\d{6,}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresá un teléfono válido (solo números, mínimo 6 dígitos)";
    }
    if (!formData.interes) newErrors.interes = "Seleccioná un interés";
    if (!formData.paraQuien) newErrors.paraQuien = "Seleccioná para quién es";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitMessage("");

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

      const data = await response.json();
      if (response.ok) {
        setSubmitMessage("¡Gracias por tu consulta a La Riocuartense Mutual! Nos comunicaremos pronto.");
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
        setSubmitMessage(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Error al enviar el formulario. Intentá de nuevo.");
    } finally {
      setIsLoading(false);
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          >
            <option value="">Seleccionar Interés</option>
            <option value="Plan Capitados">Plan Capitados</option> {/* Cambiado aquí */}
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
            disabled={isLoading}
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
          className={`w-full p-2 rounded text-white ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-mr-primary hover:bg-mr-secondary"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {submitMessage && (
        <p className={`text-center mt-4 ${submitMessage.includes("Gracias") ? "text-green-500" : "text-red-500"}`}>
          {submitMessage}
        </p>
      )}
    </div>
  );
}