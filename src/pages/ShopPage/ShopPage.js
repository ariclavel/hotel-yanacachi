import React from 'react';
import ToBook from '../../components/ToBook/ToBook';
import "./ShopPage.css";
import { useState, useContext } from 'react';
import { ServicesContext } from '../../Context/Service';
import CustomButton from '../../components/custom-button/CustomButton';
import { useLocation } from 'react-router-dom';
import { createReservation } from '../../Firebase/Firebase.utils';

const reservationInput ={
    enteredDate: "",
    requiredService: [],
    idService: ""
}
const arregloRequiredServices = []
const ShopPage = ({props}) => {
    //initialize checked , changes in ToBookItem
    const checked = false;

    //Taking state from the last page (Home)
    const {state} =useLocation();
    reservationInput.idService = state;
    console.log(state);
    //taking services data from context
    const {services} = useContext(ServicesContext);
    

    //change the object
    const [enteredService, setEnteredService] = useState(reservationInput);
    const {enteredDate,idService, requiredService} = enteredService;

    const serviceChangeHandler = (id) => {
        setEnteredService(id);
        arregloRequiredServices.push(id);
        setEnteredService({
            ...enteredService,
            requiredService: arregloRequiredServices,
        });
        console.log(enteredService);
    };
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        //setEnteredDate(event.target.value);
        setEnteredService({
           ...enteredService,
           enteredDate: event.target.value,
         });
    };
    //submit information 
    const handleSubmit = async (event) => {
        //prevent every default function
        event.preventDefault();
       
        //try to create in BD
        try{
            //creating user and doc of location in BD
            const {reservation} = await createReservation(enteredService, state, enteredDate);

            //await createUserDocumentFromAuth(user, { displayName });
            //resetFormFields();

        //catching errors
        }catch(error){
 
            console.log("signup");
            console.log(error);   
        }
 
    };
    

    return(
        <div className='shop-page'>
              <div className='shop-page'>
                
                {services
                .filter(service => service.id===state)
                .map(({filterId, ...otherToBookProps}) => (
                        <ToBook key = {state} { ...otherToBookProps} addChecked = {serviceChangeHandler} />
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
            <CustomButton type="submit" value= "Submit Form" onClick={handleSubmit} >Check disponibility</CustomButton>

        </div>
    ) 

}
export default ShopPage;