import React, { useState } from "react";

import "./category.css"
import "./details.css"

const Details = (props) => {
    let house = props.listdata.find((g) => {
        return g.id == props.detailId;
    })
 

    function appointmentHandler() {
        if (props.loggedin === "1") {

        }
        else {
            alert("User not logged in")
        }
    }
    
    return (
        <div className="itemsdet">
        <div className="house-details-container">
            <h1>House Details</h1>
            <div className="house-details-card">
                <div className="house-details-image-container">
                    <img src={house.img} alt={`House ${house.id}`} className="house-details-image" />
                </div>
                <div className="house-details-content">
                    <h2>Price: {house.price}</h2>
                    <p><strong>Area:</strong> {house.area}</p>
                    <p><strong>Description:</strong>This stunning commercial office space is located in the prestigious Lodha Supremus Lower Parel. The property offers an expansive 2345 sqft of premium office space designed for optimal productivity and comfort. Featuring modern architecture and state-of-the-art amenities, this office is perfect for businesses seeking a high-profile address. The space is meticulously maintained and includes a spacious open-plan layout, private meeting rooms, and a comfortable break area. Additionally, the location offers excellent connectivity to major business hubs and easy access to public transportation, making it an ideal choice for your business operations {house.desc}</p>
                    <p><strong>Price per sqft:</strong> {house.persqr}</p>
                    <p><strong>Facing:</strong> {house.face}</p>
                    <p><strong>Bedrooms:</strong> {house.bedroom}</p>
                    <p><strong>Washrooms:</strong> {house.washroom}</p>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Details;