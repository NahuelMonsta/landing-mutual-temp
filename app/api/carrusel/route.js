// app/api/carrusel/route.js
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET() {
  const dir = join(process.cwd(), "public", "carrusel");
  try {
    const files = await readdir(dir);
    const images = files
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Filtra imágenes
      .map((file) => `/carrusel/${file}`);
    return new Response(JSON.stringify(images), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "No se pudieron leer las imágenes" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}