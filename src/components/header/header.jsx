import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="SportSee logo" />
      </div>

      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/user/18" className="header__link">
          Profil
        </NavLink>
        <NavLink to="/settings" className="header__link">
          Réglage
        </NavLink>
        <NavLink to="/community" className="header__link">
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
