import { NavLink } from "react-router-dom";

import { NAVIGATION_ITEMS } from "../../../../../constants/navigation";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link--active"
              : "navigation__link"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
