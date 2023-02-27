import React from "react";
import "../../style/cursor.css"
// import { Icons } from '@components/icons'
// import Icons  from "../icons/about";
import Icons from '../icons/returnIcon'


function Topnavbar(){
    
    return(
        <nav className="navbarItems">
            <div style={{textAlign:"center"}}>
                <h1><Icons.main/></h1>
            </div>
            <div style={{textAlign:"center"}}>
                <ul className="nav-table">
                    <li className="link-nav">
                        <Icons.home/>
                        <a href="">
                             Home
                        </a>
                    
                    </li>
                    <li className="link-nav">
                    <a href="">
                        <Icons.about/>
                        About
                    </a>
                    </li>
                </ul>
            </div>    
        </nav>
    );
}

export default Topnavbar;