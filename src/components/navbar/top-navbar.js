import React from "react";
import "./top-nav.css"
// import { Icons } from '@components/icons'
import Icons  from "../icons/about";
import { motion } from 'framer-motion';
import { useState } from "react";
import {useVariantMousePosition,useCursorVariant} from "../../assert/hooks/variantMousePosition.js"


function Topnavbar(){
    const useVariantMousePositions = useVariantMousePosition();
    const {linkEnter ,linkLeave} = useCursorVariant();
    return(
        <div className="top-nav">
            <nav className="navbarItems">
            <div style={{textAlign:"center"}}>
                <h1></h1>
            </div>
            <div style={{textAlign:"center"}}>
                <ul className="nav-table">
                    <li className="link-nav" >
                        <a href="" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                             Home
                        </a>   
                    </li>
                    <li className="link-nav" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                    <a href="">
                        <Icons/>
                        About
                    </a>
                    </li>
                </ul>
            </div>    
        </nav>
        </div>
        
    );
}

export default Topnavbar;