import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { Firestore } from "firebase/compat/firestore";
import { prodErrorMap } from "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyAQxnYL7L85JPqsnoANrCi_MPC_OwK0oJg",
    authDomain: "yanacachidb.firebaseapp.com",
    projectId: "yanacachidb",
    storageBucket: "yanacachidb.appspot.com",
    messagingSenderId: "202197106451",
    appId: "1:202197106451:web:ccf0db0ffad997264da4e6",
    measurementId: "G-55QFQ39NPM"
  }
  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if (!userAuth){
          return;
      }

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          
          try{
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

              })

          }catch (error){
              console.log("error creating user", error.message);

          }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account"});

  export const signInWithGoogle= () => auth.signInWithPopup(provider);
  export default firebase;