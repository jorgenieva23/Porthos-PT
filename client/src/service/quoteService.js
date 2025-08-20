import axios from "axios";

export const quoteService = async () => {
  const res = await axios.get("http://localhost:3001/quotes");
  return res.data;
};

export const quoteByTagService = async (tag) => {
  const res = await axios.get(`http://localhost:3001/quotes/${tag}`);
  return res.data;
};
