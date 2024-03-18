import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';
import i18next from "i18next";
function Navbar() {
    return (
        <div className="mega__navbar">
            <div className="mega__navbar-container">
                <div className="mega__navbar-container-links">
                    <p><Link to="/" className="btn-border">HOME</Link></p>
                    <p><a href="#Events" className="btn-border">EVENTS </a></p>
                    <p><a href="#About" className="btn-border">ABOUT </a></p>
                    <p><a href="#Contact" className="btn-border">CONTACT</a></p>
                    <button className="btn">SIGN IN</button>
                </div>
                <br/>
                <div className = "mega__navbar-container-lang">
                    <button onClick={() => i18next.changeLanguage('en')}>English</button>
                    <br/>
                    <button onClick={() => i18next.changeLanguage('hn')}>Hindi</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;