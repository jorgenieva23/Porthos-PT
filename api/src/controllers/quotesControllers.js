import { Quote, Tag, sequelize } from "../model/index.js";

export const getRandomQuotes = async (limit = 10) => {
  const databaseQuotes = await Quote.findAll({
    include: {
      model: Tag,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    order: sequelize.random(),
    limit: limit,
  });
  return databaseQuotes;
};

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
      limit: 1,
    });

    return quotes.map((q) => ({
      author: q.author,
      content: q.content,
    }));
  } catch (error) {
    return [];
  }
};

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
