import React from "react";
import {useState } from "react";
import "./SignUp.css";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../FormInput/FormInput";
import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword} from "../../Firebase/Firebase.utils";


//initialize empty
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const SignUp = () => {
    //use state to know when value changes
    const [formFields, setFormFields] = useState(defaultFormFields);
    //variables
    const {displayName, email, password, confirmPassword} = formFields;
    //when inputs are changing
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        
    };
    //empty inputs when something is incorrect and user has to put the data again
    const resetFormFields = () => {
        setFormFields(defaultFormFields);

    };
    //submit information 
    const handleSubmit = async (event) => {
        //prevent every default function
        event.preventDefault();
        //comparing password
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        //try to create in BD
        try{
            //creating user and doc of location in BD
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        //catching errors
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("email already in use");
            }
            else{
                console.log("signup");
                console.log(error);

            }
        }
 
    };
    
    return(
        <div className="sign-up">

            <h2 className="title">I do not have a account</h2>
                <form className="sign-up-form" onSubmit = {handleSubmit}>
                    <FormInput
                        type = "text"
                        name = "displayName"
                        value = {displayName}
                        onChange = {handleChange}
                        label = "display name"
                        required
                    > 
                    </FormInput>

                    <FormInput
                        type = "email"
                        name = "email"
                        value = {email}
                        onChange = {handleChange}
                        label = "Email"
                        required
                    > 
                    </FormInput>

                    <FormInput
                        type = "password"
                        name = "password"
                        value = {password}
                        onChange = {handleChange}
                        label = "password"
                        required
                    > 
                    </FormInput>

                    <FormInput
                        type = "password"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        onChange = {handleChange}
                        label = "Confirm Password"
                        required
                    > 
                    </FormInput>

                    <CustomButton type = "submit"> SIGN UP </CustomButton>
                </form>
               
        </div>
    )


    
    
}
    

export default SignUp;