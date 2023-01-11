import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="top__nav">
          <div className="navbar__logo">
            <Link to={"/"}>
              <img
                src="	https://kun.uz/assets/cd6ab492/img/kun-uz-logo.svg"
                alt="navbar__logo-img"
              />
            </Link>
          </div>
          <div className="navbar__menu">
            <ul className="menu__list">
              <li className="menu__list-item">o'zbekiston</li>
              <li className="menu__list-item">sport</li>
            </ul>
          </div>
          <div className="navbar__search">
            <div className="navbar__search-select">
              <select name="">
                <option value="">o'zbekcha</option>
                <option value="">english</option>
                <option value="">russian</option>
              </select>
            </div>
            <div className="navbar__search-btn">
              <button>
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="bottom__nav">
          <p className="bottom__nav-title">hududlar</p>
          <ul className="bottom__nav-menu">
            <li className="bottom__nav-item">toshkent</li>
            <li className="bottom__nav-item">qoraqalpog'iston</li>
            <li className="bottom__nav-item">andijon</li>
            <li className="bottom__nav-item">farg'ona</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
