import React from "react"
import {
    Link,
} from "react-router-dom";

import { TiTimes } from "react-icons/ti";


const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="side-head">
            <Link className="sign-up" to="/signup">Sign-up</Link>
            
            <label className="cross" for="check1">   
                <TiTimes className="cross_icon" />
            </label>
        </div>
        <div className="sidebar-gender">
            
            <Link className="side-button" to="/">For Buyers</Link>
            <Link className="side-button" to="/">For Owners</Link>
        </div>
        <div className="sidebar-gender">
            <Link className="side-button" to="/">About Us</Link>
            <Link className="side-button" to="/">Contact Us</Link>
            <Link className="side-button" to="/">Review</Link>
            <Link className="side-button" to="/">Help</Link>
        </div>
    </div>
    )
  }
  
  export default Sidebar