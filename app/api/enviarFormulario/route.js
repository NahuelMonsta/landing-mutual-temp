export async function POST(req) {
  try {
    const data = await req.json();

    // Acá podrías conectar con Google Sheets, una base de datos o enviar un correo
    console.log("Datos recibidos:", data);

    return new Response(JSON.stringify({ message: "Formulario enviado" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error al procesar" }), {
      status: 500,
    });
  }
}
