import React from "react";
import "./ToBookItem.css";

const ToBookItem = ({id, name, price, imageUrl}) =>(
    <div className="toBook-item">
        <div 
            className = "image"
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />  
        <div className="toBook-footer">
            <span className="name"> {name} </span>
            <span className="price"> {price} </span>

        </div>
    </div>
    
)
export default ToBookItem;