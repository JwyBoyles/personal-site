import React from "react";

export default function Header(props) {

    return(
        <div className="Header">
            <p>Jacob Boyles</p>
            <ul>
                <li onClick={props.scrollHome}>Home</li>
                <li onClick={props.scrollProjects}>Projects</li>
                <li onClick={props.scrollContact}>Contact Me</li>
            </ul>
        </div>
    )
}