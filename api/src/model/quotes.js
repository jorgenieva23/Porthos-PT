import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

// Modelo Quote para almacenar citas
const Quote = sequelize.define(
  "Quote",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorSlug: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    dateAdded: {
      type: DataTypes.DATE,
    },
    dateModified: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "quotes",
    timestamps: true,
  }
);

export default Quote;
