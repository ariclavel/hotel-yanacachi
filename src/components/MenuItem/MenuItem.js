import React from 'react';
import "./MenuItem.css";
import {useNavigate} from "react-router-dom";

const MenuItem = ({title, imageUrl, history, linkUrl, match}) => {
  const navigate = useNavigate();

  return(
    <div 
    className = "menu-item" 
    onClick={() => navigate(`rooms`)}>  
        <div 
          style= {{backgroundImage: `url(${imageUrl})`
        }}
          className='menu-item background-image'>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Book now</span>
            </div>
        </div>
    </div>

  )};
 
export default MenuItem;
