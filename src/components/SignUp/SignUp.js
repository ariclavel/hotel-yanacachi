import React from "react";
import "./SignUp.css";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../FormInput/FormInput";
import {auth, createUserProfileDocument} from "../../Firebase/Firebase.utils";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

    }

    handleSubmit = async event  => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.setState;

        if(password != confirmPassword){
            alert("passwords don´t match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""

            });

        }catch(error){
            console.log(error);

        }

    }
    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({
            [name]: value
        });
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.setState;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput
                        type = "text"
                        name = "displayName"
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = "display name"
                        required
                    > 
                    </FormInput>

                    <FormInput
                        type = "email"
                        name = "email"
                        value = {email}
                        onChange = {this.handleChange}
                        label = "Email"
                        required
                    > 
                    </FormInput>

                    <FormInput
                        type = "password"
                        name = "password"
                        value = {password}
                        onChange = {this.handleChange}
                        label = "password"
                        required
                    > 
                    </FormInput>

                    <FormInput
                        type = "password"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = "Confirm Password"
                        required
                    > 
                    </FormInput>

                    <CustomButton type = "submit"> SIGN UP </CustomButton>
                </form>
            </div>
        )


    }
    
}
    

export default SignUp;