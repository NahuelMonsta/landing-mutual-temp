// app/api/enviarFormulario/route.js
import { google } from "googleapis";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, edad, email, telefono, interes, paraQuien, horario } = body;

    // Verificar variables de entorno
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.SPREADSHEET_ID) {
      throw new Error("Faltan variables de entorno: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY o SPREADSHEET_ID");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Hoja 1!A1",
      valueInputOption: "RAW",
      resource: {
        values: [[nombre, edad, email, telefono, interes, paraQuien, horario]],
      },
    });

    return new Response(JSON.stringify({ message: "Datos enviados con éxito" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error detallado:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
      response: error.response ? error.response.data : null,
    });
    return new Response(JSON.stringify({ error: "Error al enviar datos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}