import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

// Assets
import GHLogo from '../../assets/icons/GitHub-Mark-64px.png'
import LILogo from '../../assets/icons/LI-In-Bug.png'

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div>
                <Link to="/work">Work</Link>
                <Link to="/about">About Me</Link>
            </div>
            <div>
                <Link className="logo" to={{ pathname: "https://github.com/christinew2"}} target="_blank">
                    <img src={GHLogo} alt="GitHub logo"></img>
                </Link>
                <Link className="logo" to={{ pathname: "https://www.linkedin.com/in/christinew2"}} target="_blank">
                    <img src={LILogo} alt="LinkedIn logo"></img>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar