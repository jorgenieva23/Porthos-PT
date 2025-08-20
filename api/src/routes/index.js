import { Router } from "express";
import routerQuote from "./routesQuotes.js";

const router = Router();
router.use("/quotes", routerQuote);

export default router;
