import { useState } from "react";
import { QuoteCard } from "./QuoteCard";

// Carrusel para mostrar citas adicionales en el modal
export const QuoteCarousel = ({ quotes }) => {
  const [index, setIndex] = useState(0);

  if (!quotes || quotes.length === 0) return null;

  const quote = quotes[index];

  return (
    <div className="flex flex-col items-center">
      {/* Muestra la cita actual */}
      <QuoteCard
        content={quote.content}
        author={quote.author}
        tag={quote.Tags?.[0]}
      />
      {/* Puntitos para navegar entre las citas */}
      <div className="flex gap-2 mt-4">
        {quotes.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 border-cyan-600 transition-all ${
              i === index ? "bg-cyan-600" : "bg-white"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la cita ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
