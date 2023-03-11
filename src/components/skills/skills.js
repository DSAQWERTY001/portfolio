import React from "react";
import './style-skills.css'
import { useCursorVariant } from "../../assert/hooks/variantMousePosition";

const Skills = () => {
    const { linkEnter, linkLeave } = useCursorVariant();
    return (
        <section id="skills" style={{"textAlign":"center"}}>
            <div className="title-skills">
                <h2>My Skills</h2>
            </div>
            <div className="slideshow-container">
                <div className="skills-container-frontend">
                    <div className="container skills-container" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                        <h3 style={{ "textAlign": "center" }}>Frontend Development</h3>
                        <div className="skills-content">
                            <h4>HTML</h4>
                            <h4>CSS</h4>
                            <h4>Javascript</h4>
                            <h4>Bootstrap</h4>
                        </div>
                    </div>
                </div>
                <div className="skills-container-backend">
                    <div className="container skills-container" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                        <h3 style={{ "textAlign": "center" }}>Backend Development</h3>
                        <div className="skills-content-backend">
                            <h4>Java</h4>
                            <h4>PHP</h4>
                            <h4>Python</h4>
                            <h4>Dart</h4>
                            <h4>Firebase</h4>
                            <h4>MySQL</h4>
                        </div>
                    </div>
                </div>
                <div className="skills-container-framwork">
                    <div className="container skills-container" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                        <h3 style={{ "textAlign": "center" }}>Framwork</h3>
                        <div className="skills-content">
                            <h4>React</h4>
                            <h4>Fultter</h4>
                            <h4>Springboot</h4>
                            <h4>kotlin</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills