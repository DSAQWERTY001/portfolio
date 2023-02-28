import React from "react";
import "./footer.css"
import { motion } from 'framer-motion';
import cursorVariant from "../../assert/hooks/cursorMouseState";
import Icons from "../icons/returnIcon";

export default function(){
    const cursorMouseState = cursorVariant()
    

    const textEnter = () => cursorMouseState.setCursorVariant("text");
    const textLeave = () => cursorMouseState.setCursorVariant("default");
    const navEnter = () => cursorMouseState.setCursorVariant("nav");
    return (
        <footer>
      <a href="" className="footer__logo">
        MANOHAR
      </a>

      <ul className="permalinks" onMouseEnter={navEnter} onMouseLeave={textLeave}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https::/facebook.com">
          <Icons.facebook/>
        </a>
        <a href="https::/github.com">
          <Icons.github />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Manu All rights reserved</small>
      </div>
      <motion.div className='cursor' variants={cursorMouseState.variants} animate={cursorVariant}/>
    </footer>
    
    );

}