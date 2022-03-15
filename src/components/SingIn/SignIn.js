import React from "react";
import "./SignIn.css";
import FormInput from "../FormInput/FormInput";
import {useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import {signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInAuthUserWithEmailAndPassword
    } from "../../Firebase/Firebase.utils";
const defaultFormFields = {
    email: "",
    password: ""
}
const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);

    };
  
    const signInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            resetFormFields();

        }catch(error){
            switch(error.code){ 
                case "auth/wrong-password":
                    alert("wrong password")
                    break;
                case "auth/user-not-found":
                    alert("the email is incorrect")
                    break;
                
                default:
                    console.log(error);
            }
            

        }

    };
    
    
    return(
         
        
        <div className="sign-in">
        <h2>I already have an account</h2>
        
        <form onSubmit= {handleSubmit} >
            <FormInput
                name="email" 
                type= "email" 
                value= {email} 
                handleChange = {handleChange}
                label= "email"
                required 
            />
         
            <FormInput
                name="password" 
                type="password"
                value= {password}
                handleChange = {handleChange}
                label= "password" 
                required 
            />  
            <div className="buttons-container">
                <CustomButton type="submit" value= "Submit Form">Sign In</CustomButton>
                <CustomButton type= "button" onClick= {signInWithGoogle} isGoogleSignIn value= "Submit Form">
                    Google sign In
                    
                </CustomButton>
            </div>     
            
        </form>
    </div>
    )
};
export default SignIn;