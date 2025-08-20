export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-2 px-4 w-full bg-gray-800 border-t-4  shadow-sm">
      <p className="text-gray-200 font-semibold text-sm mb-2 sm:mb-0">
        Prueba Técnica | Desarrollado por{" "}
        <a
          className="text-emerald-400 hover:text-emerald-600"
          href="https://github.com/jorgenieva23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jorge Nieva
        </a>
      </p>
    </footer>
  );
};
