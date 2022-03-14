import React from "react";
import "./Authentication.css";
import SignIn from "../../components/SingIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const AuthenticationPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>

);
export default AuthenticationPage;