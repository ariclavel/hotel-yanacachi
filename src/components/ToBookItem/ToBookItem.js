import React from "react";
import "./ToBookItem.css";
//items of every services like type of rooms or tours
const ToBookItem = ({id,addChecked, name, price, imageUrl}) =>{

    const serviceChangeHandler = (event) => {
        //console.log(event.target.checked);
        //changing service with parameter of what item of service
        //pasing true or false to the addChecked function located in SHopPage
        addChecked(id,event.target.checked); 
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