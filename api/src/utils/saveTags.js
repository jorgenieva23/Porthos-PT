import axios from "axios";
import Tag from "../model/tags.js";
import { v4 as uuidv4 } from "uuid";

export const seedTagsLogic = async () => {
  const response = await axios.get("https://api.quotable.io/tags", {
    httpsAgent: new (
      await import("https")
    ).Agent({
      rejectUnauthorized: false,
    }),
  });

  if (!Array.isArray(response.data)) {
    throw new Error("La API no devolvió un array de tags");
  }

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
