import { useEffect, useState } from "react";
import { Quote } from "../components/Quote";
import { quoteService, quoteByTagService } from "../service/quoteService";
import { Modal } from "../components/Modal";

export const App = () => {
  const [quote, setQuote] = useState([]);
  const [moreQuotes, setMoreQuotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getQuote = async () => {
    const q = await quoteService();
    setQuote(q);
  };

  const handleMore = async (tag) => {
    const quotes = await quoteByTagService(tag);
    const shuffled = quotes.sort(() => 0.5 - Math.random());
    setMoreQuotes(shuffled.slice(0, 10));
    setShowModal(true);
    document.cookie = `lastSelectedKeyword=${tag}; path=/`;
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Quote quote={quote} onRefresh={getQuote} onMore={handleMore} />

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {moreQuotes.map((q, i) => (
          <div key={i} className=" p-4 rounded-lg shadow-md relative">
            <p className="text-lg font-semibold mb-2">{q.content}</p>
            <small className="text-gray-600 block mb-2"> {q.author}</small>
          </div>
        ))}
      </Modal>
    </div>
  );
};
