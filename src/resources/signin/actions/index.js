import {  
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../../config/firestore/store'
  
export const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            return({signed: true, credential, token, user});
        // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            
            return ({signed: false, credential, errorCode, errorMessage, email});
        });
};

export const UserState = () => {
    
    let uid = (onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            return (user.uid);
            // ...
        } else {
            // User is signed out
            console.log('User is signed out');
            return null;
            // ...
        }
    }))

    return uid;
}

export const FetchAuth = () => {
    console.log( auth );
}

export const SignOut = () => {
    
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful')
    }).catch((error) => {
        // An error happened.
        console.log('An error happened while signing out.')
    });
}