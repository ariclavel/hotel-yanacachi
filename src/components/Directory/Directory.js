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
    navigate(`book:${id}`);
  };
  //returning
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