import React from "react";
import {useState } from 'react';
import { motion } from 'framer-motion';
import Topnavbar from "../navbar/top-navbar.js";
import "../../style/cursor.css"
import useMousePosition from "../../assert/hooks/useMousePosition.js";

function Cursor(){
  const mousePosition = useMousePosition()
  
  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    nav: {
      height: 10,
      width: 10,
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const navEnter = () => setCursorVariant("nav");

    return (
      <div className="App-cursor">
        <div className="top-nav">
          <div onMouseEnter={navEnter} onMouseLeave={textLeave}>
            <Topnavbar/>
          </div>
        </div>
        <div >
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title-cursor'>Hello World</h1>
          <motion.div className='cursor' variants={variants} animate={cursorVariant}/>
        </div>
      </div>
      
    );
}

export default Cursor;