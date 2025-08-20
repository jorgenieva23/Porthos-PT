import axios from "axios";
import { Quote, Tag } from "../model/index.js";

async function fetchQuotes(total = 300) {
  const perRequest = 50;
  const requests = Math.ceil(total / perRequest);
  let allQuotes = [];

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

    if (Array.isArray(response.data)) {
      allQuotes = [...allQuotes, ...response.data];
    }
  }

  return allQuotes;
}

export const seedQuotesLogic = async (total = 300) => {
  const data = await fetchQuotes(total);

  if (!data || !Array.isArray(data)) {
    throw new Error("La API no devolvió un array de quotes");
  }

  const allTags = await Tag.findAll();

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

    let tagsToAssign =
      q.tags && q.tags.length
        ? await Tag.findAll({ where: { name: q.tags } })
        : allTags
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * 2) + 1);

    await quote.setTags(tagsToAssign);
  }
};
