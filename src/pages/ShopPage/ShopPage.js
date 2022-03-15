import React from 'react';
import ToBook from '../../components/ToBook/ToBook';
import "./ShopPage.css";
import { useState, useContext } from 'react';
import { ServicesContext } from '../../Context/Service';
import { getByTitle } from '@testing-library/react';


const ShopPage = ({serviceId}) => {
    console.log(serviceId);
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

            <div className='shop-page'>
                
                {services
                .filter(service => service.id===4)
                .map(({filterId, ...otherToBookProps}) => (
                        <ToBook key = {4} { ...otherToBookProps}/>
                ))}
            
            </div>
        </div>
    ) 

}
export default ShopPage;