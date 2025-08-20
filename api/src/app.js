//app.js
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.js";

// Configuración de la aplicación Express
const app = express();

app.set("trust proxy", true);

// Middlewares para CORS, JSON y logs
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas principales de la API
app.use(router);

export default app;
