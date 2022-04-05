import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import spotify from "../../assets/images/spotify-logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="header__menu">
          <li className="header__menuItem">
            <Link className="header__menuLink" to="/">
              <img className="header__logo" src={spotify} alt="logo" />
            </Link>
          </li>
          <li className="header__menuItem">
            <Link className="header__menuLink" to="/Tracks">
              Любимые Треки
            </Link>
          </li>
          <li className="header__menuItem">
            <Link className="header__menuLink" to="/Albums">
              Любимые Альбомы
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
