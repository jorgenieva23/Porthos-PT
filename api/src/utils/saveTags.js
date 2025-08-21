import axios from "axios";
import fs from "fs";
import Tag from "../model/tags.js";
import { v4 as uuidv4 } from "uuid";

// Función para poblar la base de datos con tags desde la API externa
export const seedTagsLogic = async () => {
  // Obtiene los tags desde la API de Quotable
  // const response = await axios.get("https://api.quotable.io/tags", {
  //   httpsAgent: new (
  //     await import("https")
  //   ).Agent({
  //     rejectUnauthorized: false,
  //   }),
  // });
  // const data = response.data;

  const rawData = fs.readFileSync("./data/tags.json", "utf8");
  const data = JSON.parse(rawData);

  // Verifica que la respuesta sea un array
  if (!data || !Array.isArray(data)) {
    throw new Error("La API no devolvió un array de tags");
  }

  // Guarda cada tag en la base de datos si no existe
  for (const q of data) {
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
