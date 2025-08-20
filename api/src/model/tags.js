import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Tag = sequelize.define(
  "Tag",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tags",
    timestamps: true,
  }
);

export default Tag;
