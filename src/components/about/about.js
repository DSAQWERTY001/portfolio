import React, { useState } from "react";
import "./about-style.css"
import Profile from "../../assert/picture/profile.jpg"

const About = () => {

    const [show, setShow] = useState(false);
    const showProfile = () => {
        setShow(true)
    }
    const getStyle = () => {
        return {
            textAlign: show ? 'start' : 'center',
        };
    };

    return (
        <section id="about">
            <div className="title-about">
                <h2>About me</h2>
            </div>
            <div className="about-me-container">
                <div className="about-me" style={getStyle()}>
                    <img src={Profile} onClick={showProfile} alt="Profile" style={{ width: show ? '25%' : '45%' }} />
                    <div className="about-me-content" style={{ display: show ? 'flex' : 'none' }}>
                        Test
                    </div>
                </div>

            </div>

        </section>

    );
}

export default About