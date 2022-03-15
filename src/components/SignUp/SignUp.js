import React from "react";
import {useState } from "react";
import "./SignUp.css";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../FormInput/FormInput";
import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword} from "../../Firebase/Firebase.utils";



const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        
    };
    const resetFormFields = () => {
        setFormFields(defaultFormFields);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        //const {displayName, email, password, confirmPassword} = this.setState;
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

            /*this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""

            });*/
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