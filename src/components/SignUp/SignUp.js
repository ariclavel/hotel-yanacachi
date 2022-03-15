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

/*handleSubmit = async event  => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.setState;

        if(password !== confirmPassword){
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
            console.log("signup");
            console.log(error);

        }

    }
    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({
            [name]: value
        });
    }*/
    render(){
        const {displayName, email, password, confirmPassword} = this.setState;
        return(
            <div className="sign-up">
               
            </div>
        )


    }
    
}
    

export default SignUp;