import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

// Componente para mostrar una cita individual con su autor y palabra clave
export const QuoteCard = ({ content, author, tag, children }) => (
  <div className="relative my-2 p-4 bg-gray-100 text-right border-r-6 border-cyan-400 rounded-md break-inside-avoid shadow-[25px_0_20px_-20px_rgba(0,0,0,0.45)] max-w-md]">
    {/* Muestra la palabra clave si existe */}
    {tag && (
      <small className="text-cyan-500 text-lg block mb-1">
        {typeof tag === "object" ? tag.name : tag}
      </small>
    )}
    {/* Muestra el contenido de la cita */}
    <p className="text-lg font-semibold mb-2">
      <FaQuoteLeft className="inline align-text-top mr-1 text-xs" />
      {content}
      <FaQuoteRight className="inline align-text-top text-xs" />
    </p>
    {/* Muestra el autor */}
    <cite className="text-gray-600 font-medium block mb-2">-{author}</cite>
    {/* Permite agregar botones u otros elementos */}
    {children}
  </div>
);
