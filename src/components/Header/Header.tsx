import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header__navigation">
      <NavLink className="header__link" to="/pokemon" aria-label="Home">
        Home
      </NavLink>
      <NavLink
        className="header__link"
        to="/favourites"
        aria-label="Favourites"
      >
        Favourites
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
