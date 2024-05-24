
import './signup.css'
import React, { useState, Component } from "react"
import person from "../image/Person.jpg"
import person1 from "../image/person1.jpg"
import {
  Link,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [passc, setPassc] = useState("");
  
  function submitHandler(event) {
    event.preventDefault();
    if(pass!=passc){
      alert("Pasword Doesn't Match");
    }
    else{
      let info = {
        iname: name,
        imail: mail,
        ipass: pass
      }
  
  
      let profileItems = JSON.parse(localStorage.getItem('profile')) || [];
      const Bruno = profileItems.find((person) => person.iname === name)
      if(Bruno==undefined){
        profileItems.push(info);
  
        localStorage.setItem('profile', JSON.stringify(profileItems));
        navigate("/login");
      }
      else{
        alert("Username already exists");
      }
    }
    
    

  }
  function changenameHandler(event) {
    setName(event.target.value);
  }
  function changemailHandler(event) {
    setMail(event.target.value);
  }
  function changepassHandler(event) {
    setPass(event.target.value);
  }
  function changepasscHandler(event) {
    setPassc(event.target.value);
  }
  return (
    <div className="Parent_box" > 
      {/* <img src={person1} className='img'></img> */}
      <div className="mainbox">
        <form id="signupform" onSubmit={submitHandler}>
          <div className="heading"><h1>Sign up</h1></div>


          <div><input type="text" placeholder="Name" id="name" name="name" className="en" value={name} onChange={changenameHandler} required /></div>
          <div><input type="email" placeholder="Email" id="mail" name="Email" className="em" value={mail} onChange={changemailHandler} required /></div>

          <div><input type="password" placeholder="Password" id="password" name="Pass" value={pass} onChange={changepassHandler} className="em" required minlength="5" /></div>


          <div><input type="password" placeholder="Confirm Password" id="cpassword" name="Pass" value={passc} onChange={changepasscHandler} className="em" required minlength="5" /></div>


          <div><input type="checkbox" name="r" id="rem" /><label htmlFor="rem">Remember me</label></div>

          <div><input type="checkbox" name="b" id="q" /><label htmlFor="q">I agree to Terms of Service and PrivacyPolicy.</label></div>

          <div><input type="submit" className="submit-button" value="Create an account" /></div>
          <div><p>Already have an account <Link className="linktologin" to="/login">login</Link></p></div>
        </form>
      </div>
      <img src={person} className='img'></img>
    </div>
  )
}

export default Signup
