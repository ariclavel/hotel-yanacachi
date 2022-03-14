import React from "react";
import ToBookItem from "../ToBookItem/ToBookItem";
import "./ToBook.css";


const ToBook = ({title, items}) => (  
    <div className="toBook">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className = "preview">
            {items
                .filter((item, idx, id ) => idx < 4)
                .map(({id, ...otherItemProps}) => (    
                <ToBookItem key={id} {...otherItemProps} />
            ))}

        </div>
    </div>
)
export default ToBook;