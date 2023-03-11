import React from "react";
import "./about-style.css"
import Profile from "../../assert/picture/profile.jpg"

const About = () => {
    return (
        <section id="about">
            <div className="title-about">
                <h2>Anout me</h2>
            </div>
            <div className="about-me">
                <img src={Profile} />
            </div>
        </section>

    );
}

export default About