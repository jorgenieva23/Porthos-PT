import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { qodService } from "../service/quoteService";
import { MoreButton } from "../components/MoreButton";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Página que muestra una cita aleatoria (Quote of the Day)
export const QuoteOfDay = () => {
  // Estado para la cita random
  const [quote, setQuote] = useState(null);

  // Obtiene la cita random al cargar la página
  useEffect(() => {
    const fetchQuote = async () => {
      const data = await qodService();
      setQuote(data);
    };
    fetchQuote();
  }, []);

  // Muestra un mensaje de carga mientras se obtiene la cita
  if (!quote) return <div>Cargando...</div>;

  // Renderiza la cita random con autor y estilos
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-screen px-4">
        <div className="p-6 sm:p-8 md:p-10 text-right border-l-4 border-r-4 border-cyan-400 sm:border-l-0 lg:border-r-4 rounded-xl shadow-[20px_0_30px_-20px_rgba(0,0,0,0.45)] w-full max-w-4xl bg-white ">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-medium mb-4 leading-snug">
            <FaQuoteLeft className="inline align-text-top mr-1 text-base sm:text-lg md:text-xl" />
            {quote.content}
            <FaQuoteRight className="inline align-text-top ml-1 text-base sm:text-lg md:text-xl" />
          </p>

          <cite className="text-gray-600 text-base sm:text-lg md:text-xl font-sans block mb-2">
            - {quote.author}
          </cite>
        </div>
      </div>
      <Footer />
    </div>
  );
};
