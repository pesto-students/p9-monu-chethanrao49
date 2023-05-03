import { Link, useLocation } from "react-router-dom";

import "./index.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="logo-title">
        <img src="https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png" />
        <h1>Shortner</h1>
      </div>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className={location.pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
