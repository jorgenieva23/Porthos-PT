import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { sequelize } from "./src/model/index.js";
import { seedTagsLogic } from "./src/utils/saveTags.js";
import { seedQuotesLogic } from "./src/utils/saveQuotesdb.js";

const PORT = process.env.PORT || 3001;

// Función principal para iniciar el servidor y poblar la base de datos
async function startServer() {
  try {
    // Conexión a la base de datos
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    // Sincroniza los modelos con la base de datos
    await sequelize.sync({ force: true });
    console.log("✅ Modelos sincronizados correctamente.");

    // Inicia el servidor Express
    app.listen(PORT, async () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);

      try {
        await seedTagsLogic();
        console.log("Tags seeded ✅");
        await seedQuotesLogic(300);
        console.log("Quotes seeded ✅");
      } catch (err) {
        console.error("Error al poblar datos:", err.message);
      }
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error.message);
  }
}

// Ejecuta la función principal
startServer();
