import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import NavigationControls from "./NavigationControls";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link className="navbar__brand">Azaria-SW</Link>

        <Navigation />
        <NavigationControls />
      </div>
    </header>
  );
}

export default Navbar;
