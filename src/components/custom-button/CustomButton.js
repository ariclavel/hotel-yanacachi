import React from "react";
import "./CustomButton.css";

const CustomButton = ( {children, isGoogleSignIn, ...otherprops} ) => (
    <button className= {`$ {isGoogleSignIn ? "google-sign-in" : "non"} custom-button`} 
    
    {...otherprops} >
        {children}
    </button>

)
export default CustomButton;