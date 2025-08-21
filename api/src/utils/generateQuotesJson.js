// import fs from "fs";
// import { fetchQuotes } from "./saveQuotesdb.js";

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
