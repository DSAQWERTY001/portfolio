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
            display: 'flex',
            width: show ? '400px' : 'auto'
        };
    };

    return (
        <section id="about">
            <div className="title-about">
                <h2>About me</h2>
            </div>
            <div className="about-me-container">
                <div className="about-me" style={getStyle()}>
                    <div>
                        <img src={Profile} onClick={showProfile} alt="Profile" style={{ width: show ? '75%' : '45%', textAlign: show ? 'start' : 'center' }} />
                    </div>

                </div>
                <div className="about-me-content" style={{ display: show ? 'flex' : 'none' }}>
                    <br/>
                    Teerapong Boontool<br/><br/>
                    Education 
                    <br/>&nbsp;&nbsp;&nbsp;- KING MONGKUT'S UNIVERSITY OF TECHNOLOGY <br/>NORTH BANGKOK
                    <br/>&nbsp;&nbsp;&nbsp;- College of Industrial Technology
                    <br/>&nbsp;&nbsp;&nbsp;- Department of Electronics Engineering Technology
                    <br/>&nbsp;&nbsp;&nbsp;- GPA 3.02
                    <br/> &nbsp;&nbsp;&nbsp;- SINCE : 2019 - now
                </div>

            </div>

        </section>

    );
}

export default About