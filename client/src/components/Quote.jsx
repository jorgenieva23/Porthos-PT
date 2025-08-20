import { MoreButton } from "./MoreButton";

export const Quote = ({ quote, onRefresh, onMore }) => {
  if (!quote) return null;

  const groups = [quote.slice(0, 4), quote.slice(4, 8), quote.slice(8, 12)];

  const renderGroup = (group) => (
    <div className="grid gap-4">
      {group.map((q, i) => (
        <div key={i} className=" p-4 rounded-lg shadow-md relative">
          <p className="text-lg font-semibold mb-2">{q.content}</p>
          <small className="text-gray-600 block mb-2">{q.Tags[0]}</small>
          <MoreButton tag={q.Tags[0]} onClick={onMore} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {groups.map((g, i) => (
        <div key={i}>{renderGroup(g)}</div>
      ))}
    </div>
  );
};
