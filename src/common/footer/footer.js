import React from "react"

import facebook from "./images/facebook.png";
import instagram from "./images/instagram.jpeg"
import telegram from "./images/telegram.jpeg"
import linkden from "./images/linkden.png"
import "./footer.css"
import {
    Link,
} from "react-router-dom";
const Footer = ()=>{
    return(
        <div className="footbox">
            <div className="foot">
                <div className="foot-section foot-section1">
                    <p>Location</p>
                    
                    <div><Link to="/"> India</Link></div>
                    <div><Link to="/"> USA</Link></div>
                    <div><Link to="/"> Australia</Link></div>
                    <div><Link to="/"> England</Link></div>

                </div>
                <div className="foot-section foot-section2">
                    <p>About</p>
                    <div><Link to="/"> About Us</Link></div>
                    <div><Link to="/"> Contact Us</Link></div>
                </div>

                <div className="foot-section foot-section4">
                    <p>Most Rented</p>
                    <div><Link to="/"> Jaipur</Link></div>
                    <div><Link to="/"> Delhi</Link></div>
                    <div><Link to="/"> Bombay</Link></div>
                    <div><Link to="/"> Agra</Link></div>

                </div>
                <div className="foot-section foot-section3">
                    <p>Follows</p>
                    <div className="follow-box">
                        <Link to="/"><img className="logo-follow" src={facebook} alt=""/></Link>
                        <Link to="/"><img className="logo-follow" src={instagram} alt=""/></Link>
                        <Link to="/"><img className="logo-follow" src={linkden} alt=""/></Link>
                        <Link to="/"><img className="logo-follow" src={telegram} alt=""/></Link>
                    </div>

                </div>

            </div>
            <p className="terms">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy
                Policy and Content Policies. All trademarks are properties of their respective owners. 2008-
                2024 © booking.com Ltd. All rights reserved. </p>
        </div>
    )
}

export default Footer;