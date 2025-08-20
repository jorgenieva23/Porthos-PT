import { Link } from "react-router-dom";

export const LinkIcon = ({ to, children }) => {
  return (
    <Link className="..." to={to}>
      {children}
    </Link>
  );
};
