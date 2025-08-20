import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-7 py-3 border-b-4 border-cyan-200 shadow-sm bg-gray-800">
      <NavLink
        to="/"
        className="transition-colors duration-200"
        style={{ textDecoration: "none" }}
      >
        <div className="flex items-center">
          <p className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-wide font-sans">
            Quotes
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/qod"
        className="transition-colors duration-200"
        style={{ textDecoration: "none" }}
      >
        <div className="flex items-center">
          <p className="text-lg sm:text-xl font-bold text-gray-200 hover:text-emerald-500 px-2 font-sans">
            Quote Of The Day
          </p>
        </div>
      </NavLink>
    </nav>
  );
};
