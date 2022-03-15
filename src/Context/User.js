import {useState, createContext, useEffect} from "react";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from "../Firebase/Firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});
export const UserProvider = ({children} ) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};


    //run once
    useEffect (() => {
        const unsuscribe = onAuthStateChangedListener ((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsuscribe;

    }, []);
    return <UserContext.Provider value= {value}> {children} </UserContext.Provider>
};
