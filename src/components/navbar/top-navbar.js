import React from "react";
import "../../style/cursor.css"
// import { Icons } from '@components/icons'
import Icons  from "../icons/about";


function Topnavbar(){
    
    return(
        <nav className="navbarItems">
            <div style={{textAlign:"center"}}>
                <h1></h1>
            </div>
            <div style={{textAlign:"center"}}>
                <ul className="nav-table">
                    <li className="link-nav">
                        <a href="">
                             Home
                        </a>
                        {/* <Icons name = {"facebook"}/> */}
                        {/* {Icons.facebook} */}
                    
                    </li>
                    <li className="link-nav">
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