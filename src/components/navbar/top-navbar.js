import React from "react";
import "../../style/cursor.css"
// import { Icons } from '@components/icons'
import Icons  from "../icons/about";
import { motion } from 'framer-motion';
import { useState } from "react";
import {useVariantMousePosition,CursorVariant} from "../../assert/hooks/variantMousePosition.js"


function Topnavbar(){
    const useVariantMousePositions = useVariantMousePosition();
    const { cursorVariant,textEnter, textLeave ,link} = CursorVariant();
    return(
        <nav className="navbarItems">
            <motion.nav className='cursor' variants={useVariantMousePositions} animate={cursorVariant}/>
            <div style={{textAlign:"center"}}>
                <h1></h1>
            </div>
            <div style={{textAlign:"center"}}>
                <ul className="nav-table">
                    <li className="link-nav" >
                        <a href="" onMouseEnter={link} onMouseLeave={textLeave}>
                             Home
                        </a>
                    
                    </li>
                    <li className="link-nav" onMouseEnter={link} onMouseLeave={textLeave}>
                    <a href="">
                        <Icons/>
                        About
                    </a>
                    </li>
                </ul>
            </div>    
        </nav>
    );
}

export default Topnavbar;