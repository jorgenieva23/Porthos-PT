import {
  getRandomQuotes,
  getQuotesByTag,
  getOneRandomQuote,
  getAllTags,
} from "../controllers/quotesControllers.js";

// Handler para obtener citas aleatorias
export const getRandomQuotesHandler = async (req, res) => {
  try {
    const databaseQuotes = await getRandomQuotes(10);

    // Formatea la respuesta con los datos necesarios
    const results = databaseQuotes.map((q) => ({
      id: q.id,
      author: q.author,
      content: q.content,
      authorSlug: q.authorSlug,
      length: q.length,
      dateAdded: q.dateAdded,
      dateModified: q.dateModified,
      createdAt: q.createdAt,
      updatedAt: q.updatedAt,
      Tags: q.Tags.map((t) => t.name),
    }));

    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Handler para obtener una cita aleatoria (Quote of the Day)
export const getOneRandomQuotesHandler = async (req, res) => {
  try {
    const getRandom = await getOneRandomQuote();
    res.status(200).json(getRandom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Handler para obtener citas por palabra clave (tag)
export const getQuotesByTagHandler = async (req, res) => {
  const { tag } = req.params;

  try {
    const quotes = await getQuotesByTag(tag);
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Handler para obtener todos los tags
export const getTagsHandler = async (req, res) => {
  try {
    const tags = await getAllTags();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
