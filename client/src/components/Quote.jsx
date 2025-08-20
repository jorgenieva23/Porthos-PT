import { MoreButton } from "./MoreButton";
import { QuoteCard } from "./QuoteCard";

// Componente que muestra una lista de citas en formato "bricks"
export const Quote = ({ quote, onMore }) => {
  if (!quote) return null;

  // Filtra y limita las citas válidas
  const validQuotes = quote
    .filter((q) => q && q.Tags && q.Tags.length > 0)
    .slice(0, 10);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {validQuotes.map((q, i) => (
        <QuoteCard
          key={i}
          content={q.content}
          author={q.author}
          tag={q.Tags[0]}
        >
          {/* Botón para ver más citas de la misma palabra clave */}
          <MoreButton tag={q.Tags[0]} onClick={onMore} />
        </QuoteCard>
      ))}
    </div>
  );
};
