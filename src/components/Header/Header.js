import React from "react";
import "./Header.css";
import { ReactComponent as Logo} from "../../Assets/simbolo.svg";
import { Link } from 'react-router-dom';
import { auth,signOutUser } from "../../Firebase/Firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../Context/User";

const Header = ( {} ) => { 
    const {currentUser, setCurrentUser}= useContext(UserContext);
    
    const signOutHandler = async() =>{
        await signOutUser();
        setCurrentUser(null);
    }

    return(
        <div className="header">
        <Link className="logo-container" to = "/">
            <Logo className="logo"/>
        </Link>
         <div className="options">
            <Link className="option" to = "/book">
                BOOK HERE!
            </Link>
            <Link className="option" to = "/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick = {signOutHandler}>
                    SIGN OUT
                </div>
                :
               
                <Link className="option" to = "/auth">
                    SIGN IN
                </Link>
            }
            
        </div>

    </div>

    )
    
}
export default Header;