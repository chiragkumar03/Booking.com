import React from "react"
import "./profile.css"
import {
  Link,
} from "react-router-dom";
import bg from "../image/profilebg.png"
import pl from "../image/pleft.png"
import pr from "../image/pright.png"
const Profile = (props) => {
  let content = undefined;
  if (props.islogin == "0") {
    content = <div className="notlogin">
      <p className="box1">USER NOT LOGGED IN PLEASE LOG IN TO CONTINUE</p>
      
      <p className="box1">Already have an account <Link className="linktologin" to="/login">login</Link></p>
      <p className="box1">Don't have an account <Link className="linktosignup" to="/signup">Register</Link></p>
      </div>
  }
  else {
    content = <div className="profile-info">
      <h1>Profile</h1>
      <div className="user-info">
        <p>USERNAME : <span id="username">{props.usrname}</span></p>
      </div>
      <div className="user-info">
        <p>G-Mail   : <span id="mail">{props.usrmail}</span></p>
      </div>
      <button id="log-out" onClick={props.clickHandle1}>Log Out</button>
    </div>
  }

  
  return (
      <div className="outside_profile" >
        <img src={pl} className="img"></img>
        <div className="profile-container">
          {content}
        </div>
        <img src={pr} className="img"></img>
      </div>

  )
}

export default Profile
