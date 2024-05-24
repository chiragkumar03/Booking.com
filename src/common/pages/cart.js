import React from "react"
import "./cart.css"
import data from "../data";
import pen from "../image/pending.png";
import apr from "../image/aprroved.png";
import rej from "../image/rejected.png";
 

const Cart = (props) => {
  let profileItems = JSON.parse(localStorage.getItem('profile')) || [];
  const Bruno = profileItems.find((person) => person.iname === props.usrname);
  let house ;
  let content;
  if (Bruno == undefined || Bruno.location == undefined) {
    content = <div> <h1>Nothing Selected</h1>  </div>
  }
  else {
    house = data[Bruno.location][Bruno.id-1];
    let statusText;
    let statusImg;
    let pamentopt;
    switch (Bruno.status) {
      case 1:
        statusText = 'Approved';
        statusImg = apr;
        pamentopt = <div> <button>Pay</button> </div>
        break;
      case -1:
        statusText = 'Rejected';
        statusImg = rej;
        break;
      case 0:
      default:
        statusText = 'Pending';
        statusImg = pen;
        break;
    }

    content = <div className="selected-houses-container">
      <h1>Your Selected House</h1>
      <div className="houses-list">
        <div key={house.id} className="house-card">
          <img src={house.img} alt={`House ${house.id}`} className="house-image" />
          <div className="house-details">
            <h2>Price: {house.price}</h2>
            <p>Area: {house.area}</p>
            <p>Description: {house.desc}</p>
            <p>Price per sqft: {house.persqr}</p>
            <p>Facing: {house.face}</p>
            <p>Bedrooms: {house.bedroom}</p>
            <p>Washrooms: {house.washroom}</p>
            <p>Status: {house.washroom}</p>
          </div>
        </div>
      </div>
      <div>
        <h2>STATUS</h2>
        <div className="status-container">
          <img src={statusImg} alt={statusText} className="status-image" />
          <p className="status-text">{statusText}</p>
          {pamentopt}
        </div>
      </div>
    </div>
  }


  return (
    <div className="main-boxcart">
      {content}
    </div>
  )
}

export default Cart
