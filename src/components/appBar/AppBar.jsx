import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activeLinkClass}>
        Home
      </NavLink>
      <NavLink to="catalog" className={activeLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}
