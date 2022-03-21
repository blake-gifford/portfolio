import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const AboutMe = () => {
    return(
        <div id="intro" className="container-height">
            <div className="intro-text text">
                <h2>Blake Gifford</h2>
                <h2>Full Stack Web and iOS Developer</h2>
                <h3 className="a-tag-style"> <a href='https://www.linkedin.com/in/blake-gifford/' rel="noreferrer" target='_blank' ><AiFillLinkedin /></a> <a href='https://github.com/blake-gifford' rel="noreferrer" target='_blank' >< AiFillGithub /></a> <a href='https://twitter.com/blakegifford_' rel="noreferrer" target='_blank' ><AiFillTwitterCircle /></a> </h3>
                
            </div>
        </div>
    )
};

export default AboutMe;
