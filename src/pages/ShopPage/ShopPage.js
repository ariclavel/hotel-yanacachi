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
    //Taking state from the last page (Home)
    const {state} =useLocation();
    reservationInput.idService = state;
    console.log(state);
    //taking services data from context
    const {services} = useContext(ServicesContext);
    

    //change the object
    const [enteredService, setEnteredService] = useState(reservationInput);
    const {enteredDate,idService, requiredService} = enteredService;

    const serviceChangeHandler = (id,check) => {
        if(check ===true){
            setEnteredService(id);
            arregloRequiredServices.push(id);
            setEnteredService({
                ...enteredService,
                requiredService: arregloRequiredServices,
            });
        }
        else{
            setEnteredService(id);
            arregloRequiredServices.splice(arregloRequiredServices.indexOf(id),1);
            setEnteredService({
                ...enteredService,
                requiredService: arregloRequiredServices,
            });
        }
        
        console.log(enteredService);
    };
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        //setEnteredDate(event.target.value);
        setEnteredService({
           ...enteredService,
           enteredDate: event.target.value,
         });
         console.log(enteredService);
    };
    //submit information 
    const handleSubmit = async (event) => {

        //prevent every default function
        event.preventDefault();
        console.log(enteredService);
        if(enteredDate==="" || !idService || enteredService.requiredService.length === 0){
            alert("empty required values");
            return;
   
        }
        else{
             //try to create in BD
            try{
                var i 
                for (i=0;i<enteredService.requiredService.length;i++) { 
                    const required = enteredService.requiredService[i];
                    //making unique id
                    const keyId = idService+`${required}`+enteredDate;
                    
                    //filtering services to make separate reservations
                     let arrayFiltered = services.filter(item => item.id == idService);
                     let nameFiltered = arrayFiltered[0].items.filter(item => item.id == required);
                    console.log(nameFiltered[0]);  
                    const nameMessage = nameFiltered[0].name;
                        
                    console.log(nameMessage);
                    //creating user and doc of location in BD
                    await createReservation({enteredDate,idService, required, keyId, nameMessage});
                }
                //const {reservation} = await createReservation({enteredDate,idService, requiredService});
                //resetFormFields();

            //catching errors
            }catch(error){
    
                console.log("reservation");
                console.log(error);   
            }

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