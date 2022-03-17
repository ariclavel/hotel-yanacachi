import React from "react";
import "./Header.css";
import { ReactComponent as Logo} from "../../Assets/simbolo.svg";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../Context/User";
import { signOutUser } from "../../Firebase/Firebase.utils";

const Header = () => { 
    const {currentUser}= useContext(UserContext);
    
    return(
        <div className="header">
        <Link className="logo-container" to = "/">
            <Logo className="logo"/>
        </Link>
         <div className="options">
            {
                currentUser ?
                    
                <Link className="option" to = "/home">
                    BOOK HERE!
                </Link>
                :
                null
            }

            <Link className="option" to = "/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                
                <Link className="option"  onClick = {signOutUser} to = "/">
                    SIGN OUT
                </Link>
                :
               
                <Link className="option" to = "/">
                    SIGN IN
                </Link>
            }
            
        </div>

        </div>

    )
    
}
export default Header;