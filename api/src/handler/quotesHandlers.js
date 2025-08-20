import {
  getRandomQuotes,
  getQuotesByTag,
  getAllTags
} from "../controllers/quotesControllers.js";

export const getRandomQuotesHandler = async (req, res) => {
  try {
    const databaseQuotes = await getRandomQuotes(10);

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

export const getQuotesByTagHandler = async (req, res) => {
  const { tag } = req.params;

  try {
    const quotes = await getQuotesByTag(tag);
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTagsHandler = async (req, res) => {
  try {
    const tags = await getAllTags();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
