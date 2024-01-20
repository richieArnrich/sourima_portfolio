import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navigation">
      <Link to={"/"} className="brand">
        Sourima Banerjee
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/articles"}>Articles</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Contact Me</NavLink>``
        </li>
      </ul>
    </nav>
  );
}

export default Header;
