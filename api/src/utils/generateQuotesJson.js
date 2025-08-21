// import fs from "fs";
// import axios from "axios";
// import { fetchQuotes } from "./saveQuotesdb.js";
// import { seedTagsLogic } from "./saveTags.js";

// async function generateJson() {
//   try {
//     console.log("⏳ Descargando quotes de la API...");
//     const data = await fetchQuotes(300);
//     fs.writeFileSync(
//       "./data/quotes.json",
//       JSON.stringify(data, null, 2),
//       "utf8"
//     );
//     console.log("✅ Quotes guardadas en data/quotes.json");
//   } catch (err) {
//     console.error("❌ Error al generar JSON:", err.message);
//   }
// }

// generateJson();

// async function generateTagJson() {
//   try {
//     console.log("⏳ Descargando tags de la API...");

//     // Traemos los tags desde la API de Quotable
//     const response = await axios.get("https://api.quotable.io/tags", {
//       httpsAgent: new (
//         await import("https")
//       ).Agent({
//         rejectUnauthorized: false,
//       }),
//     });
//     const data = response.data.map((tag) => ({
//       id: tag._id || tag.name,
//       name: tag.name,
//       slug: tag.slug,
//     }));

//     fs.writeFileSync("./data/tags.json", JSON.stringify(data, null, 2), "utf8");
//     console.log("✅ Tags guardados en data/tags.json");
//   } catch (err) {
//     console.error("❌ Error al generar JSON:", err.message);
//   }
// }

// generateTagJson();
