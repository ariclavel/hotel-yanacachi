import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import "./Directory.css";
import { ServicesContext } from '../../Context/Service';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom";

const Directory = () =>  {
  //import navigation
  const navigate = useNavigate();
  //services from data services
  const {services} = useContext(ServicesContext);
  //navigate to a specific service
  const selectService = ({id}) => {
    console.log({id});
    navigate(`book:${id}`,{state:id});
  };
  //returning
    return (
      <div className='directory-menu'>
        {
          services.map (({id, ...otherProps}) =>(
            <MenuItem key={id} ss={() => selectService({id})}  {...otherProps}  />
          ))
        }
      </div>

    )
}

export default Directory;