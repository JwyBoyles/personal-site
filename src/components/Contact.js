import React from "react";
import resume from "../images/Resume.pdf"

export default function Contact(props) {

    return(
        <div className="Contact">
            <p ref={props.scrollToContact}>Contact</p>
            <div>
            <div className="email">
            <p>Questions?</p>
            <p>or</p>
            <p>Just want to say Hello:</p>
            <p>Jwyboyles@Gmail.com</p>
            </div>
            <div className="moreInfo">
            <a href={resume}>Resume</a>
            <a href="https://github.com/JwyBoyles">Github</a>
            </div>
            </div>
        </div>
    )
}