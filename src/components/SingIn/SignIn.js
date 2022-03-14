import React from "react";
import "./SignIn.css";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {signInWithGoogle} from "../../Firebase/Firebase.utils";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''

        }

    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState ({email: "", password: ""} )

    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState( {[name]: value} )
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                
                <form onSubmit= {this.handleSubmit} >
                    <FormInput
                        name="email" 
                        type= "email" 
                        value= {this.state.email} 
                        handleChange = {this.handleChange}
                        label= "email"
                        required 
                    />
                 
                    <FormInput
                        name="password" 
                        type="password"
                        value= {this.state.password}
                        handleChange = {this.handleChange}
                        label= "password" 
                        required 
                    />       
                    <CustomButton type="submit" value= "Submit Form">Sign In</CustomButton>
                    <CustomButton onClick= {signInWithGoogle} value= "Submit Form">
                        {' '} Sign In With Google
                        {' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;