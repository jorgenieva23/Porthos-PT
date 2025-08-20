import { Router } from "express";
import {
  getRandomQuotesHandler,
  getOneRandomQuotesHandler,
  getQuotesByTagHandler,
  getTagsHandler,
} from "../handler/quotesHandlers.js";

// Rutas para las operaciones de citas y tags
const routerQuote = Router();

// Ruta para obtener citas aleatorias
routerQuote.get("/", getRandomQuotesHandler);

// Ruta para obtener una cita aleatoria (Quote of the Day)
routerQuote.get("/qod", getOneRandomQuotesHandler);

// Ruta para obtener todos los tags
routerQuote.get("/tag", getTagsHandler);

// Ruta para obtener citas por palabra clave (tag)
routerQuote.get("/:tag", getQuotesByTagHandler);

export default routerQuote;
