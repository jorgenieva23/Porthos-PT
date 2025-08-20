import axios from "axios";
import Tag from "../model/tags.js";
import { v4 as uuidv4 } from "uuid";

// Función para poblar la base de datos con tags desde la API externa
export const seedTagsLogic = async () => {
  // Obtiene los tags desde la API de Quotable
  const response = await axios.get("https://api.quotable.io/tags", {
    httpsAgent: new (
      await import("https")
    ).Agent({
      rejectUnauthorized: false,
    }),
  });

  // Verifica que la respuesta sea un array
  if (!Array.isArray(response.data)) {
    throw new Error("La API no devolvió un array de tags");
  }

  // Guarda cada tag en la base de datos si no existe
  for (const q of response.data) {
    await Tag.findOrCreate({
      where: { name: q.name },
      defaults: {
        id: uuidv4(),
        name: q.name,
        slug: q.slug,
      },
    });
  }
};
