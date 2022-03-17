import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import "./Directory.css";
import { ServicesContext } from '../../Context/Service';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom";

const Directory = () =>  {
  const navigate = useNavigate();
  const {services,setServices} = useContext(ServicesContext);
  const selectService = ({id}) => {
    navigate(`book:${id}`);
  };
    
    return (
      <div className='directory-menu'>
        {
          services.map (({id,...otherSectionProps}) =>(
            <MenuItem key={id} ss={() => selectService({id})}  {...otherSectionProps}  />
          ))
        }
      </div>

    )
}

export default Directory;