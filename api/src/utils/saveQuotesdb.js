import axios from "axios";
import { Quote, Tag } from "../model/index.js";

// Función para obtener muchas citas aleatorias desde la API externa
async function fetchQuotes(total = 300) {
  const perRequest = 50;
  const requests = Math.ceil(total / perRequest);
  let allQuotes = [];

  // Realiza varias peticiones para obtener el total deseado
  for (let i = 0; i < requests; i++) {
    const response = await axios.get(
      `https://api.quotable.io/quotes/random?limit=${perRequest}`,
      {
        httpsAgent: new (
          await import("https")
        ).Agent({
          rejectUnauthorized: false,
        }),
      }
    );

    // Agrega las citas obtenidas al array principal
    if (Array.isArray(response.data)) {
      allQuotes = [...allQuotes, ...response.data];
    }
  }

  return allQuotes;
}

// Función para poblar la base de datos con citas y asociarlas a tags
export const seedQuotesLogic = async (total = 300) => {
  const data = await fetchQuotes(total);

  // Verifica que la respuesta sea un array
  if (!data || !Array.isArray(data)) {
    throw new Error("La API no devolvió un array de quotes");
  }

  // Obtiene todos los tags existentes en la base de datos
  const allTags = await Tag.findAll();

  // Guarda cada cita en la base de datos y le asigna tags
  for (const q of data) {
    const [quote] = await Quote.findOrCreate({
      where: { id: q._id },
      defaults: {
        author: q.author,
        content: q.content,
        authorSlug: q.authorSlug,
        length: q.length,
        dateAdded: q.dateAdded,
        dateModified: q.dateModified,
      },
    });

    // Asigna tags a la cita (los que vienen de la API o aleatorios)
    let tagsToAssign =
      q.tags && q.tags.length
        ? await Tag.findAll({ where: { name: q.tags } })
        : allTags
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * 2) + 1);

    await quote.setTags(tagsToAssign);
  }
};
