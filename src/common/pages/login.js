import "./login.css"
import React, { useState, Component } from "react"
import {
  Link, 
} from "react-router-dom";
import person3 from "../image/person3.jpg"
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  function changenameHandler(event) {
    setName(event.target.value);
  }
  function changepassHandler(event) {
    setPass(event.target.value);
  }

  function submitHandler(event) {
      event.preventDefault();
      let profileItems = JSON.parse(localStorage.getItem('profile')) || [];
      const Bruno = profileItems.find((person) => person.iname === name)
      
      if(Bruno==undefined){ 
        alert("Invalid Details");
      }
      else{
        props.clickHandle();
        props.setusrName(Bruno.iname);
        props.setusrMail(Bruno.imail);
        navigate("/");
      }

  }
  return (
   <div className="Parent_box1">
    <div className = "mainbox1">
        <form id="loginform" onSubmit={submitHandler}>
            <div className="heading1"><h1 >Login</h1></div>
            <div><input type="text" placeholder="Name" name="Name" id="Name" className="em1" value={name} onChange={changenameHandler} required/></div>
            <div><input type="password" id="pass" placeholder="Password" name="Pass" value={pass} onChange={changepassHandler} className="em1" required minlength="5"/></div>
            <div><input type="checkbox" name="r" id="rem"/><label htmlFor="rem">Remember me</label> <Link className="linktosignup" to="/">Forgot Password</Link> </div>
            
            <div><input type="submit" className="submit-button1"  value="Login"/></div>
          
            <div><p>Don't have an account <Link className="linktosignup" to="/signup">Register</Link></p></div>
        </form>
    </div>
    <img src={person3} className='img1'></img>
   </div>
  )
}

export default Login
