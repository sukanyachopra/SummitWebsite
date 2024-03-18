import React from 'react';
import Event from '../../img/event.png'
import './registration.css';
import {Link} from 'react-router-dom';
function Registration() {
    return (
        <div className="media__registration">
            <div className="media__registration-container">
                <div className="media__registration-container-Img">
                    <img src={Event} alt="Event"></img>
                </div>
                <div className="media__registration-container-content">
                    <h2>Our biggest summit yet</h2>
                    <br/>
                    <br/>
                    <p>We're going global! This year's Mega Media Summit will be streamed on a virtual platform across eight time zones, with participants worldwide.</p>
                    <br/>
                    <p>Get the latest industry insights, mingle with fellow practitioners, and get inspired by our keynote speakers during this exciting 3-day virtual conference.</p>
                    <br/><br/><br/><br/>
                    <button className="btn">Reserve your seat</button>
                </div>
            </div>
        </div>
    );
}

export default Registration;