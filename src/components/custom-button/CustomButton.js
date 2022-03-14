import React from "react";
import "./CustomButton.css";

const CustomButton = ( {children,...otherprops} ) => (
    <button className="custom-button" {...otherprops} >
        {children}
    </button>

)
export default CustomButton;