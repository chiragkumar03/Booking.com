import React from "react";
import './header.css'
import Sidebar from "./sidebar";
import { TfiAlignJustify } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { TiZoom } from "react-icons/ti";   
import { TiPen } from "react-icons/ti";     
import {
    Link,
} from "react-router-dom";
import admindata from "../admindata";
function Header(props){
    let ls = undefined;
    let usr = undefined;
    if(props.islogin=='0'){
        ls = [<Link className="gender button" to="/login">LOGIN</Link>,
        <Link className="gender button" to="/signup">REGISTER</Link>]

    }
    else {
        let newadmin = admindata.find((e)=>{
            return e.name ==props.usrname;
        });
        usr =props.usrname;
        if(newadmin==undefined){
            ls = undefined;
        }
        else{
            ls =<Link className="gender button" to="/admin">ADMIN PANEL</Link>
        }
        
    }
    
    return(
        <nav className="head" >
            <input type="checkbox" id="check1" className="check1"></input>
            <Sidebar></Sidebar>
            <div className="head-front">

                <label for="check1">
                    <span className="glyphicon glyphicon-list list-button"><TfiAlignJustify></TfiAlignJustify></span>
                </label>

                <Link className="logo_title" to="/">Booking.com</Link>
                <div className="bar">
                    {ls}
                    <Link className="gender button" to="/admin">ABOUT US</Link>
                    <Link className="gender button" to="/">CONTACT US</Link>
                </div>
            </div>
            <div className="head-back">
                <div className="search-box">
                    <TiZoom className="searchicon" />
                    <input className="search" type="text" placeholder="Search"></input>
                </div>
                <Link className="cart icon" to="/cart">
                    <span className="glyphicon glyphicon-user profile_pic"><TiPen /></span>
                </Link>
                <Link className="profile icon" to="/profile">
                    <span className="glyphicon glyphicon-shopping-cart profile_pic"><VscAccount /></span>
                </Link>
                <span className="usrname">{usr}</span>
            </div>
        </nav>


        // <ul className="App-header">
        //   <li>
        //     <Link to="/">Home</Link>
        //   </li>
        //   <li>
        //     <Link to="/about">
        //       About Us
        //     </Link>
        //   </li>
        //   <li>
        //     <Link to="/contact">
        //       Contact Us
        //     </Link>
        //   </li>
        // </ul>
    )
}

export default Header;