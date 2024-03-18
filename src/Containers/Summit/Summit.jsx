import React from 'react';
import './summit.css';
function Summit() {
    return (
        <div className="media__summit">
            <div className="media__summit-container" id="Events">
                <div className="media__summit-container-heading">
                    <h2>Summit Highlights</h2>
                </div>
                <div className="media__summit-container-content">
                    <ol>
                        <li>
                            <p className="media__summit-container-content-counter">01</p>
                            <div className="media__summit-container-content-wrapper">
                                <h4>Talks & Open Forums</h4>
                                <br/>
                                <p>The industry's biggest names share their insights Talks & Open Forums</p>
                                <br/><br/>
                            </div>
                        </li>
                        <li>
                            <p className="media__summit-container-content-counter">02</p>
                            <div className="media__summit-container-content-wrapper">
                                <h4>Mini Masterclasses</h4>
                                <br/>
                                <p>Expert-led workshops to supercharge your career</p>
                                <br/><br/>
                            </div>
                        </li>
                        <li>
                            <p className="media__summit-container-content-counter">03</p>
                            <div className="media__summit-container-content-wrapper">
                                <h4>Seamless Networking</h4>
                                <br/>
                                <p>Connect with thousands of media practitioners on our platform</p>
                                <br/><br/>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Summit;