import React from "react";
import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div>LOGO</div>
            <h2>Title is here</h2>
            <div className="links">
                <a href="#banner">Banner</a>
                <a href="#section1">Section 1</a>
                <a href="#section2">Section 2</a>
            </div>
        </div>
    )
}

export default NavBar;