import { Quote, Tag, sequelize } from "../model/index.js";

// Obtiene una cita aleatoria de la base de datos
export const getOneRandomQuote = async () => {
  const quote = await Quote.findOne({
    include: {
      model: Tag,
      attributes: ["name"],
      through: { attributes: [] },
    },
    order: sequelize.random(),
  });
  return quote;
};

// Obtiene varias citas aleatorias, priorizando diferentes palabras clave
export const getRandomQuotes = async (limit = 10) => {
  const databaseQuotes = await Quote.findAll({
    include: {
      model: Tag,
      attributes: ["name"],
      through: { attributes: [] },
    },
    order: sequelize.random(),
    limit: limit * 10,
  });

  // Filtra para obtener citas con tags únicos
  const seenTags = new Set();
  const uniqueQuotes = [];

  for (const quote of databaseQuotes) {
    if (!quote.Tags || quote.Tags.length === 0) continue;
    const tagName = quote.Tags[0].name;
    if (!seenTags.has(tagName)) {
      uniqueQuotes.push(quote);
      seenTags.add(tagName);
    }
    if (uniqueQuotes.length >= limit) break;
  }

  // Si faltan citas, rellena con las restantes
  if (uniqueQuotes.length < limit) {
    const remaining = databaseQuotes.filter((q) => !uniqueQuotes.includes(q));
    uniqueQuotes.push(...remaining.slice(0, limit - uniqueQuotes.length));
  }

  return uniqueQuotes.slice(0, limit);
};

// Obtiene citas filtradas por palabra clave (tag)
export const getQuotesByTag = async (tagName) => {
  try {
    const tag = await Tag.findOne({
      where: sequelize.where(
        sequelize.fn("lower", sequelize.col("name")),
        tagName.toLowerCase()
      ),
    });
    if (!tag) return [];

    const quotes = await tag.getQuotes({
      include: [
        {
          model: Tag,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
      order: sequelize.random(),
      limit: 50,
    });

    // Mezcla y limita a 10 citas
    const shuffled = quotes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10).map((q) => ({
      author: q.author,
      content: q.content,
    }));
  } catch (error) {
    return [];
  }
};

// Obtiene todos los tags disponibles
export const getAllTags = async () => {
  try {
    const tags = await Tag.findAll({
      attributes: ["name"],
      order: [["name"]],
    });

    return tags.map((tag) => tag.name);
  } catch (error) {
    console.error("Error al obtener los tags:", error.message);
    return [];
  }
};
