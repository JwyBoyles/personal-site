
import React from "react";
import reactIcon from "../images/React-icon.svg"
import cssLogo from "../images/CSS3_logo.svg"
import code from "../images/code.svg"

export default function Home(props) {

    return(
        <div className="Home">
            <div className="titleContainer">
            <div className="textAnchor" ref={props.scrollToHome}></div>
            <h1>User Oriented Web Design</h1>
            <p>Hi I'm Jacob, I am a front-end developer with a passion for creating intuitive products and sleek design.</p>
            </div>
            <div className="cardContainer">
                <div className="home--card">
                    <img src={reactIcon} />
                    <p>I use React to program fully functional applications that can be helpful in everyday life.</p>
                </div>
                <div className="home--card">
                    <img src={cssLogo} />
                    <p>I use CSS to design aesthically pleasing and accessible websites.</p>
                </div>
                <div className="home--card">
                    <img src={code} />
                    <p>I use Git and Webpack to manage my projects and create an environment that is conducive for teamwork</p>
                </div>    
            </div>
        </div>
    )
}

