import React from "react";
import "./CustomButton.css";

//button styles reusable
let c = ""
const CustomButton = ( {children, isGoogleSignIn, ...otherprops} ) =>{
    //if googleSignIn is true is a google button and style changes
    
    
    isGoogleSignIn?
        c = "google-sign-in"
    :
        c= "custom-button"
    
    return(

        <button className={c}
            
        {...otherprops} >
                {children}
        </button>
          
    )

} 
export default CustomButton;