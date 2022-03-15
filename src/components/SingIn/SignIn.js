import React from "react";
import "./SignIn.css";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    } from "../../Firebase/Firebase.utils";


const SignIn = () => {
   
  
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    
    return(
         
    <div>
        <h1>SignIn page</h1>  
        <button onClick={logGoogleUser}>
            Sign In with Google PopUp
        </button>             
    </div>
    );
};
export default SignIn;