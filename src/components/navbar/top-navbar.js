import React from "react";
import "./style-navbar.css"
import { useCursorVariant } from "../../assert/hooks/variantMousePosition"
import Icons from "../../assert/icons/returnIcon";


const Topnavbar = () => {
    const { linkEnter, linkLeave } = useCursorVariant();
    return (
        <div className="top-nav">
            <nav className="navbarItems">
                <div style={{ textAlign: "center" }} onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                    <h1><Icons.main /></h1>
                </div>        
                <div style={{ textAlign: "center" }}>
                    <ul className="nav-table">
                        <li className="link-nav" >
                            <a href="#" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                                <Icons.home /> Home
                            </a>
                        </li>
                        <li className="link-nav" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                            <a href="#ablut">
                                <Icons.about /> About
                            </a>
                        </li>
                        <li className="link-nav" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                            <a href="#skills">
                                <Icons.skills /> Skills
                            </a>
                        </li>
                        <li className="link-nav" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                            <a href="#contacts">
                                <Icons.contact /> Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Topnavbar;