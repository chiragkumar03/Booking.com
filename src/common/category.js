import React from "react";

import "./category.css"
import {
    Link,
} from "react-router-dom";

const Category = (props) => {

    function appointmentHandler(e) {
        if (props.loggedin === "1") {
            let profileItems = JSON.parse(localStorage.getItem('profile'));
            for(let i in  profileItems){
                if(profileItems[i].iname==props.usrname){
                    profileItems[i]["location"]=props.name;
                    profileItems[i]['id']=e.target.value;
                    profileItems[i]['status']=0;
                    break;
                }
            }
            localStorage.setItem('profile', JSON.stringify(profileItems));
            alert("We will notify the admin. Admin will approve your request as soon as possible")
        }
        else {
            alert("User not logged in")
        }
    }

    function detailClickHandler(e){
        props.setDetailId(e.target.value);
    } 



    let fp = props.listdata.map(e => (
        <div className="items">
            <img className="img-item" src={e.img} alt="not found" />
            <div className="item-box">
                <div><span class="title-category">₹ {e.price}</span><span>{e.area}</span></div>

                <p> {e.desc}</p>
                <div className="details">
                    <div><p className="price"> Only </p><span>{e.persqr}</span></div>
                    <div><p className="price"> Facing </p><span>{e.face}</span> </div>
                    <div><p className="price"> Bedroom </p><span>{e.bedroom}</span></div>
                    <div><p className="price"> Washroom </p><span>{e.washroom}</span> </div>
                </div>
                <div>
                    <button className="add-to-cart" value={e.id} onClick={appointmentHandler} ><i class="fa fa-shopping-cart"  > </i> Contact Agent</button>
                    <Link to="/Detail"><button className="add-to-cart" value={e.id} onClick={detailClickHandler}><i className="fa fa-shopping-cart"> </i> More Details</button></Link>
                </div>
            </div>
        </div>
    ))

    
    return (
        <div className="content">
            <p className="main-page-title" id="main-page-title">{props.name}</p>
            <div className="content-parent" id="content-parent">

                <div className="categories-bar" >


                    <div className="dropdown">
                        <button className="dropbtn">Filters</button>
                        <div className="dropdown-content">
                            <p>Location</p>
                            <select onChange={props.changelocationHandler1} value={props.name}>
                                <option value="Haryana">Haryana</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Agra">Agra</option>
                            </select>
                        </div>
                        <div className="dropdown-content">
                            <p>Number of Rooms</p>
                            <select onChange={props.handleRoomChange} value={props.selectedRooms}>
                                <option value="All">Show All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="dropdown-content">
                            <p>Price</p>
                            <select onChange={props.handlPriceChange} value={props.selectedPrice}>
                                <option value="All">Show All</option>
                                <option value="15,000">Under ₹15,000</option>
                                <option value="25,000">Under ₹25,000</option>
                                <option value="35,000">Under ₹35,000</option>
                            </select>
                        </div>
                        <div className="dropdown-content">
                            <p>Facing Direction</p>
                            <select onChange={props.handleDirChange} value={props.selectedDir}>
                                <option value="All">Show All</option>
                                <option value="East">East</option>
                                <option value="west">West</option>
                                <option value="North">North</option>
                                <option value="South">South</option>
                            </select>
                        </div>
                        <div className="dropdown-content">
                            <p>Size</p>
                            <select onChange={props.handleSizeChange} value={props.selectedSize}>
                                <option value="All">show All</option>
                                <option value="facing_direction">300sq/ft</option>
                                <option value="price">350sq/ft</option>
                                <option value="size">400sq/ft</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="content-box" id="content-box">
                    {fp}
                </div>

            </div>

        </div>
    )

}

export default Category;