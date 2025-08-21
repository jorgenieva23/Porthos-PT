import axios from "axios";

// Configuración de URLs
const API_URLS = {
  local: "http://localhost:3001",
  prod: "https://porthos-pt-production.up.railway.app",
};

// Selecciona la URL que quieres usar
const BASE_URL = API_URLS.prod; // Cambia a API_URLS.local para trabajar localmente

// Obtiene las citas principales
export const quoteService = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/quotes`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    return [];
  }
};

// Obtiene la cita random del día
export const qodService = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/quotes/qod`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener la cita del día:", error);
    return null;
  }
};

// Obtiene citas por palabra clave
export const quoteByTagService = async (tag) => {
  try {
    const res = await axios.get(`${BASE_URL}/quotes/${tag}`);
    return res.data;
  } catch (error) {
    console.error(`Error al obtener citas para la palabra clave "${tag}":`, error);
    return [];
  }
};
