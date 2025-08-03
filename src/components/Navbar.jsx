import { NavLink } from "react-router-dom";

function Navbar({ main }) {
  return (
    <header className={`navbar ${main ? "main" : ""}`}>
      <div>
        <h2 className="text-lg">
          N<span className="white">G</span>
        </h2>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link text-med black">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/howto" className="nav-link text-med black">
              How To
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className="nav-link text-med black">
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link text-med black">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
