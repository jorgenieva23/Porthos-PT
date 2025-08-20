import { useEffect, useState } from "react";
import { Quote } from "../components/Quote";
import { quoteService, quoteByTagService } from "../service/quoteService";
import { Modal } from "../components/Modal";
import { getCookie } from "../utils/getCookie";
import { QuoteCarousel } from "../components/QuotesCarousel";
import { CircleLoader } from "react-spinners";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Página principal que muestra las citas en bloques tipo "bricks"
export const LandingPage = () => {
  // Estado para las citas principales
  const [quote, setQuote] = useState(null);
  // Estado para las citas del modal (más citas por palabra clave)
  const [moreQuotes, setMoreQuotes] = useState([]);
  // Estado para mostrar/ocultar el modal
  const [showModal, setShowModal] = useState(false);

  // Obtiene las citas principales al cargar la página
  const getQuote = async () => {
    const allQuotes = await quoteService();
    const lastKeyword = getCookie("lastSelectedKeyword");

    // Si existe la cookie, la primera cita corresponde a esa palabra clave
    if (lastKeyword) {
      const firstQuote = allQuotes.find((q) => q.Tags[0] === lastKeyword);
      const otherQuotes = allQuotes.filter((q) => q.Tags[0] !== lastKeyword);
      const shuffledOthers = otherQuotes.sort(() => 0.5 - Math.random());
      setQuote([firstQuote, ...shuffledOthers].slice(0, 12));
    } else {
      // Si no existe la cookie, muestra citas aleatorias
      const shuffled = allQuotes.sort(() => 0.5 - Math.random());
      setQuote(shuffled.slice(0, 12));
    }
  };

  // Al hacer clic en "more", obtiene más citas por palabra clave y abre el modal
  const handleMore = async (tag) => {
    const quotes = await quoteByTagService(tag);
    const shuffled = quotes.sort(() => 0.5 - Math.random());
    setMoreQuotes(shuffled.slice(0, 10));
    setShowModal(true);
    document.cookie = `lastSelectedKeyword=${tag}; path=/`;
  };

  // Ejecuta la función al montar el componente
  useEffect(() => {
    getQuote();
  }, []);

  // Muestra el spinner mientras se cargan las citas
  if (!quote) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircleLoader
          size={80}
          color="#06b6d4"
          loading={true}
          speedMultiplier={1}
        />
      </div>
    );
  }

  // Renderiza la página con Navbar, bloques de citas y el modal
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" flex justify-center items-center">
        <Quote quote={quote} onRefresh={getQuote} onMore={handleMore} />

        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <QuoteCarousel quotes={moreQuotes} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
};
