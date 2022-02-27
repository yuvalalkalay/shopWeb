import React from "react";
import '../styles/index.css';

const NavBar = ()=>{
    return(
        <nav>
            <ul className="navBar">
                <li><span className="link">Home</span></li>
                <li><span className="link">men's clothing</span></li>
                <li><span className="link">jewelery</span></li>
                <li><span className="link">electronics</span></li>
                <li><span className="link">women's clothing</span></li>
                <li><span className="link">contact us</span></li>
                <li><span className="link">feedback</span></li>
            </ul>
        </nav>
    )
}

export default NavBar;