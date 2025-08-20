export const MoreButton = ({ tag, onClick }) => {
  return (
    <button
      onClick={() => onClick(tag)}
      className="absolute bottom-2 right-2 text-blue-600 hover:underline"
    >
      More with {tag}
    </button>
  );
};
