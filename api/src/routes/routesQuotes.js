import { Router } from "express";
import {
  getRandomQuotesHandler,
  getQuotesByTagHandler,
  getTagsHandler,
} from "../handler/quotesHandlers.js";

const routerQuote = Router();

routerQuote.get("/", getRandomQuotesHandler);
routerQuote.get("/tag", getTagsHandler);
routerQuote.get("/:tag", getQuotesByTagHandler);

export default routerQuote;
