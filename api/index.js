import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { sequelize } from "./src/model/index.js";

import { seedTagsLogic } from "./src/utils/saveTags.js";
import { seedQuotesLogic } from "./src/utils/saveQuotesdb.js";

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    await sequelize.sync({ force: true });
    console.log("✅ Modelos sincronizados correctamente.");

    // Ejecutar seeds iniciales
    await seedTagsLogic();
    console.log("Tags seeded ✅");
    console.log("⏳ Espere... Sembrando citas...");

    setTimeout(async () => {
      await seedQuotesLogic(300);
      console.log("Quotes seeded ✅");
    }, 4000);

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error.message);
  }
}

startServer();
