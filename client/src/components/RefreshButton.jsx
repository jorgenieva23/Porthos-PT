import { FaRedo } from "react-icons/fa";

export const RefreshButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      aria-label="Refresh"
      className="p-2 rounded-full shadow-sm hover:bg-gray-200 transition"
    >
      <FaRedo />
    </button>
  );
};
