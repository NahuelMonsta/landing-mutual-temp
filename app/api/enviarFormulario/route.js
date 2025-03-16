// app/api/enviarFormulario/route.js
import { google } from "googleapis";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, ciudad, fechaNacimiento, sexo, estadoCivil, interes } = body;

    // Autenticación con Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    // Agregar datos a la hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1", // Ajusta el nombre de la hoja si es diferente
      valueInputOption: "RAW",
      resource: {
        values: [[nombre, email, telefono, ciudad, fechaNacimiento, sexo, estadoCivil, interes]],
      },
    });

    return new Response(JSON.stringify({ message: "Datos enviados con éxito" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Error al enviar datos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}