// Botón para mostrar más citas relacionadas con una palabra clave
export const MoreButton = ({ tag, onClick }) => {
  return (
    <button
      onClick={() => onClick(tag)}
      className="text-gray-100 hover:underline bg-blue-500 rounded-md p-1 mt-2 text-sm"
    >
      More
    </button>
  );
};
