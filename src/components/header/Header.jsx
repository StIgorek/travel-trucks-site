import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import Logo from "../logo/logo";

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Logo />
      </div>
      <nav className={css.nav}>
        <NavLink to="/" className={activeLinkClass}>
          Home
        </NavLink>
        <NavLink to="catalog" className={activeLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
