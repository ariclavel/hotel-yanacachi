import React from "react";
import "./FormInput.css";
//form input style reusable
const FormInput = ( {handleChange, label, ...otherprops} ) => (
    <div className="group">
        <input className="form-input"
            onChange = {handleChange}
            {...otherprops}           
        />
        {
            label?(
                <label className= {`$ {
                    otherprops.value.lenght ? 'shrink': ''
                    } form-input-label`} 
                >
                    {label}
            </label>
            ) : null
        }
        
    </div>

)
export default FormInput;