import React from 'react';
import './about.css'
import About1 from '../../img/about1.png';
import About2 from '../../img/about2.png';

function About() {
    return (
        <div className="media__about">
            <div className="media__about-container" id="About">
                <div className="media__about-container-img1">
                    <img src={About1} alt="about1"></img>
                </div>
                <div className="media__about-container-img2">
                    <img src={About2} alt="about2"></img>
                </div>
                <div className="media__about-container-content">
                    <h2>About the organizers</h2>
                    <br/><br/>
                    <p>The Mega Media Summit is presented by InnoBlue Events in partnership with the Global Media Alliance. Together, they have over a decade of experience in crafting relevant and dynamic events for professional learning and networking.</p>
                    <br/><br/><br/>
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default About;