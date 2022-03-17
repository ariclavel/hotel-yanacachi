import React from 'react';
import ToBook from '../../components/ToBook/ToBook';
import "./ShopPage.css";
import { useState, useContext } from 'react';
import { ServicesContext } from '../../Context/Service';
import CustomButton from '../../components/custom-button/CustomButton';
import { useLocation } from 'react-router-dom';
const ShopPage = ({props}) => {
    const {state} =useLocation();
    console.log(state);
    const {services} = useContext(ServicesContext);
    
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    };

    return(
        <div className='shop-page'>
              <div className='shop-page'>
                
                {services
                .filter(service => service.id===state)
                .map(({filterId, ...otherToBookProps}) => (
                        <ToBook key = {state} { ...otherToBookProps}/>
                ))}
            
            </div>
            <div className='new-expense__control'>
                <label>PUT THE DATE OF YOUR VISIT TO CHECK AVAILABILITY!</label>
                <input
                    type='date'
                    min='2019-01-01'
                    max='2022-12-31'
                    onChange={dateChangeHandler}
                    >
                </input>
            </div>
            <CustomButton type="submit" value= "Submit Form">Check disponibility</CustomButton>

        </div>
    ) 

}
export default ShopPage;