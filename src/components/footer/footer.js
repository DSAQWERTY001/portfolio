import React from "react";
import "./footer.css"
import Icons from "../../assert/icons/returnIcon";
import { useCursorVariant } from "../../assert/hooks/variantMousePosition.js"

export default function () {
  const { footerlink, linkLeave, footertitle, textLeave } = useCursorVariant();
  return (
    <footer>
      <h1 onMouseEnter={footertitle} onMouseLeave={textLeave} className="footer-title">
        PORTFOLIO FOOTER
      </h1>

      <ul className="links">
        <li onMouseEnter={footerlink} onMouseLeave={linkLeave}>
          <a href="#">Home</a>
        </li>
        <li onMouseEnter={footerlink} onMouseLeave={linkLeave}>
          <a href="#about">About</a>
        </li>
        <li onMouseEnter={footerlink} onMouseLeave={linkLeave}>
          <a href="#skills">Skills</a>
        </li>
        <li onMouseEnter={footerlink} onMouseLeave={linkLeave}>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer-socials" >
        <a href="https::/facebook.com" onMouseEnter={footerlink} onMouseLeave={linkLeave}>
          <Icons.facebook />
        </a>
        <a href="https::/github.com" onMouseEnter={footerlink} onMouseLeave={linkLeave}>
          <Icons.github />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Copy right</small>
      </div>
    </footer>

  );

}