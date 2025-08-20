//db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Verifica que las variables de entorno estén presentes
if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME) {
  throw new Error("Faltan variables de entorno de la base de datos");
}

// Instancia de Sequelize para conectar a la base de datos PostgreSQL
export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    dialect: "postgres",
  }
);
