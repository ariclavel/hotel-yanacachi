import React from "react";
import ToBookItem from "../ToBookItem/ToBookItem";
import "./ToBook.css";
import CustomButton from "../custom-button/CustomButton";
//elements to book in every service section
//every section with their items (bookItems)
const ToBook = ({title, items}) => (  
    <div className="toBook">
        <h1 className="title">{title.toUpperCase()}</h1>
       
        <div className = "preview">
            {items
                .map(({id, ...otherItemProps}) => (    
                <ToBookItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
)
export default ToBook;