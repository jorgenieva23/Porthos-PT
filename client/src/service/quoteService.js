import axios from "axios";

// Obtiene las citas principales
export const quoteService = async () => {
  try {
    const res = await axios.get("http://localhost:3001/quotes");
    return res.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    return [];
  }
};

// Obtiene la cita random del día
export const qodService = async () => {
  try {
    const res = await axios.get("http://localhost:3001/quotes/qod");
    return res.data;
  } catch (error) {
    console.error("Error al obtener la cita del día:", error);
    return null;
  }
};

// Obtiene citas por palabra clave
export const quoteByTagService = async (tag) => {
  try {
    const res = await axios.get(`http://localhost:3001/quotes/${tag}`);
    return res.data;
  } catch (error) {
    console.error(`Error al obtener citas para la palabra clave "${tag}":`, error);
    return [];
  }
};
