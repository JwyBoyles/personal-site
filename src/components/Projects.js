import React from "react";
import chirpershot from "../images/chirpershot.png"
import newsshot from "../images/newsshot.png"
import colormeshot from "../images/colormeshot.png"

export default function Projects(props) {

    return(
        <div className="Projects">
            <p ref={props.scrollToProjects}>Projects</p>
            <div className="oddProject">
                <div>
                <a href="https://chirper-pi.vercel.app/"className="projectTitle">Chirper</a>
                <p className="projectDesc">Chirper is an attempt at getting as close as possible to recreating one of the most popular websites in the world, Twitter.
                    Users are able to create accounts, makes posts, customize their profile, and follow other members of the site.</p>
                </div>
                <img src={chirpershot} className="projectImage"></img>
            </div>
            <div className="evenProject">
                <img src={newsshot}className="projectImage"></img>
                <div>
                <a  href="https://in-the-news.vercel.app/"className="projectTitle">In the News</a>
                <p className="projectDesc">In The News is a web app I created to cross check what different news organizations are saying about current events.
                    Users can choose from a wide range of highly visited sites and get side by side comparisons 
                    on all of the important stories of the day.</p>
                </div>
            </div>
            <div className="oddProject">
                <div>
                <a href="https://color-me.vercel.app/"className="projectTitle">Color Me</a>
                <p className="projectDesc">Color Me is a tool for creating and testing out new color palletes. 
                    It is a fully interactive page where every element can be designed and manipulated in order to refine
                    color schemes and explore new ideas. Users can then generate a page of all the styling they've used if they
                    would like would like to use the CSS for their own projects. </p>
                </div>
                <img src={colormeshot} className="projectImage"></img>
            </div>
        </div>
    )
}