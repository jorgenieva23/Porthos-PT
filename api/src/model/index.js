import { sequelize } from "../db.js";
import Quote from "./quotes.js";
import Tag from "./tags.js";

Quote.belongsToMany(Tag, { through: "QuoteTags" });
Tag.belongsToMany(Quote, { through: "QuoteTags" });

export { sequelize, Quote, Tag };