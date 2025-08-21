// db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME) {
//   throw new Error("Faltan variables de entorno de la base de datos");
// }

// export const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false,
//     dialect: "postgres",
//   }
// );

if (!process.env.DATABASE_URL) {
  throw new Error("Falta la variable DATABASE_URL");
}

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
});
