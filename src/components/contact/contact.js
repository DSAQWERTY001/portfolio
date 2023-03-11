import React from "react";
import "./contact-style.css"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useCursorVariant } from "../../assert/hooks/variantMousePosition";

const Contact = () => {
    const { linkEnter, linkLeave, changecolor } = useCursorVariant();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_z9c6brw", "template_whkng2b", form.current, "fg4FdFf6P8Gx0Gldl")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <section id="contacts">
            <div className="title-contact">
                <h2>Contact Me</h2>
            </div>
            <div className="contact-container">
                <div className="contact-menumail" onMouseEnter={changecolor} onMouseLeave={linkLeave}>
                    <h4>Email</h4>
                    <h5>manu@gmail.com</h5>
                    <a href="mailto:manu@gmail.com" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                        Send a message
                    </a>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form-email">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        onMouseEnter={linkEnter}
                        onMouseLeave={linkLeave}
                    />
                    <input type="email" name="email" placeholder="Your Email" required onMouseEnter={linkEnter} onMouseLeave={linkLeave} />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                        onMouseEnter={linkEnter}
                        onMouseLeave={linkLeave}
                    ></textarea>
                    <div style={{ "textAlign": "center" }}>
                        <button type="submit" className="button" onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
                            Send Message
                        </button>
                    </div>

                </form>
            </div>

        </section>
    );
}

export default Contact
