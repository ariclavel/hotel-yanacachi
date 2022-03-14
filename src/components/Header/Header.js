import React from "react";
import "./Header.css";
import { ReactComponent as Logo} from "../../Assets/simbolo.svg";
import { Link } from 'react-router-dom';
import { auth } from "../../Firebase/Firebase.utils";

const Header = ( {currentUser} ) => (
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
                <div className="option" onClick = { () => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className="option" to = "/signin">
                    SIGN IN
                </Link>
            }
            
        </div>

    </div>
)
export default Header;