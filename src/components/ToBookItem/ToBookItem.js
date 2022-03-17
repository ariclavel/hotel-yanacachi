import React from "react";
import "./ToBookItem.css";
//items of every services like type of rooms or tours
const ToBookItem = ({id, name, price, imageUrl}) =>(
    <div className="toBook-item">
        <div 
            className = "image"
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />  
        <input type="checkbox"></input>
        <div className="toBook-footer">
            <span className="name"> {name} </span>
            <span className="price"> {price} </span>

        </div>
    </div>
    
)
export default ToBookItem;