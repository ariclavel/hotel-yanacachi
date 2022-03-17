import React from "react";
import "./SignIn.css";
import FormInput from "../FormInput/FormInput";
import {useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import {signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword,
    } from "../../Firebase/Firebase.utils";
import {useNavigate} from "react-router-dom";

//initialize void inputs
const defaultFormFields = {
    email: "",
    password: ""
}
const SignIn = () => {
    //use it for navigation
    const navigate = useNavigate();
    //allow change state of formFields, initialize in void inputs
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
   
//function to reset formfields when user decide to signin with google or has a wrong email or password
    const resetFormFields = () => {
        setFormFields(defaultFormFields);

    };
 //sign in with google  
    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
        //go to home page
        navigate(`home`);
        
    };
    //detect input changes
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    //detect submit changes
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
            //go to home page
            navigate(`home`);

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
                <CustomButton type="submit" value= "Submit Form">
                    Sign In</CustomButton>
                <CustomButton type= "button" onClick= {signInWithGoogle} isGoogleSignIn value= "Submit Form">
                    Google sign In
                    
                </CustomButton>
            </div>     
            
        </form>
    </div>
    )
};
export default SignIn;