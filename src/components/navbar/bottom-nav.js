import React from "react";
import "./style-navbar.css"
import { useState } from "react";
import Icons from "../../assert/icons/returnIcon";
import { useCursorVariant } from "../../assert/hooks/variantMousePosition"

const Nav = () => {
  const { bottombar, linkLeave } = useCursorVariant();
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="botton-nav" onMouseEnter={bottombar} onMouseLeave={linkLeave}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <Icons.home />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Icons.about />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <Icons.skills />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <Icons.contact />
      </a>
    </nav>
  );
};

export default Nav;