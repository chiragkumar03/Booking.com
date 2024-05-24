import React, { Component } from 'react';
import "./admin.css"

const Admin = (props) => {
    let profileItems = JSON.parse(localStorage.getItem('profile'));
    function approve(e){ 

        for(let i in  profileItems){
            if(profileItems[i].iname==e.target.value){
                profileItems[i]['status']=1;
                break;
            }
        }
        localStorage.setItem('profile', JSON.stringify(profileItems));
    }
    function reject(e){
        for(let i in  profileItems){
            if(profileItems[i].iname==e.target.value){
                profileItems[i]['status']=-1;
                break;
            }
        }
        localStorage.setItem('profile', JSON.stringify(profileItems));
    }


    const userlist = profileItems.map((e)=>{
        let stat;
        let button;
        if(e.status==0){
            stat="pending";
            button = <td><button className="btn" value={e.iname} onClick={approve}>approve</button><button value={e.iname} onClick={reject}>reject</button></td>
        }
        else if(e.status==1){
            stat="Approved";
            button = "N/A"
        }
        else if(e.status==-1){
            stat="Rejected";
            button = "N/A"
        }
        else{
            stat = "N/A";
            button = "N/A"
        }
        return <tr>
        <td>{e.iname}</td>
        <td>{e.imail}</td>
        <td>{e.ipass}</td>
        <td>{e.location?e.location:"Not Chosen"}</td>
        <td>{e.id?e.id:"Not Chosen"}</td>
        <td>{stat}</td>
        <td>{button}</td>
        </tr>
    })


  return (
   <div className="main-box">
        <div className="inside-box">
            <h2>Welcome Admin {props.usrname}</h2>
            <h3>USERLIST</h3>
            <table>
            <tr>
            <th>Name</th>
            <th>Mail</th>
            <th>Password</th>
            <th>Location Selected</th>
            <th>House id</th>
            <th>Status</th>
            <th>Control</th>
            </tr>
            
            {userlist}
            </table>
            
        </div>
   </div>
  )
}

export default Admin
