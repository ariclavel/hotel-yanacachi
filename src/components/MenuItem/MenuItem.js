import React from 'react';
import "./MenuItem.css";


const MenuItem = ({title, ss, imageUrl}) => {
  return(
    <div 
    className = "menu-item" 
    onClick={(id) => ss({id})}
    >  
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
