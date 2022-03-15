import {initializeApp} from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore,
    getDoc,
    setDoc,
    doc,
    Firestore
 } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAQxnYL7L85JPqsnoANrCi_MPC_OwK0oJg",
    authDomain: "yanacachidb.firebaseapp.com",
    projectId: "yanacachidb",
    storageBucket: "yanacachidb.appspot.com",
    messagingSenderId: "202197106451",
    appId: "1:202197106451:web:ccf0db0ffad997264da4e6",
    measurementId: "G-55QFQ39NPM"
  }
  //initialize app
  const firebaseApp = initializeApp(firebaseConfig);
  //every time we call a provider we need an account
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account"});

  export const auth = getAuth();
  export const signInWithGooglePopup= () => signInWithPopup(auth,provider);


  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    //protecting code
    if(!userAuth)return;
    const userDocRef = doc(db, "users",userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        console.log("no existo");
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation
            });

        }catch (error){
            console.log("error creating user", error.message);

        }
    }
    return userDocRef;
    
};
//this method is apart for allowing changes to the authentication without changing this
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password)return;

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password)return;

    return await signInWithEmailAndPassword(auth, email, password)

}
 

  


  