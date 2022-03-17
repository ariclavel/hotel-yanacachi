import React from "react";
import ToBookItem from "../ToBookItem/ToBookItem";
import "./ToBook.css";
//elements to book in every service section
//every section with their items (bookItems)
const ToBook = ({title, items, addChecked}) => {
    //parameter addChecked child to child located in ShopPage
    return (  
        <div className="toBook">
            <h1 className="title">{title.toUpperCase()}</h1>
           
            <div className = "preview">
                {items
                    .map(({id, ...otherItemProps}) => (    
                    <ToBookItem key={id} {...otherItemProps} addChecked= {addChecked} id={id} />
                ))}
            </div>
        </div>
    )
}

export default ToBook;