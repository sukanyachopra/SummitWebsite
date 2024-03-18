import React from 'react';
import './footer.css'
function Footer() {
    return (
        <div className= "media__footer">
            <div className="media__footer-container" id="Contact">
                <div className="media__footer-container-heading">
                    <h2>See you at the summit!</h2>
                </div>
                <div className="media__footer-container-content">
                    <p className="media__footer-container-content-subheading">Mailing Address</p>
                    <p>123 Anywhere St., Any City, State, Country 12345</p>
                    <br/>
                    <p className="media__footer-container-content-subheading">Email Address</p>
                    <p>hello@reallygreatsite.com</p>
                    <br/>
                    <p className="media__footer-container-content-subheading">Phone Number</p>
                    <p>(123) 456 7890</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;