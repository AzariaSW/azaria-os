import { NAVIGATION_ITEMS } from "../../../../../constants/navigation";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <a key={item.id} href={item.path} className="navigation__link">
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
