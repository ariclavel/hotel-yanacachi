import React from "react";
import "./ToBookItem.css";
import { useState } from "react";
//items of every services like type of rooms or tours
const ToBookItem = ({id,addChecked, name, price, imageUrl}) =>{
    const [enteredService, setEnteredService] = useState("false");

    const serviceChangeHandler = (event) => {
        console.log(event.target.checked);
        setEnteredService({enteredService: event.target.checked});
        addChecked(id);
        //checked = event.target.checked;
        //console.log(enteredService); 
    };
   

    return(
        <div className="toBook-item">
            <div 
                className = "image"
                style = {{
                    backgroundImage: `url(${imageUrl})`
                }}
            />  
            <input type="checkbox" onChange={serviceChangeHandler}></input>
            <div className="toBook-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
    
            </div>
        </div>       
    )

};


export default ToBookItem;