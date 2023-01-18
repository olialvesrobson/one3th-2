import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBv_VSq7Ks6Ke7MMml6hCta04YtJhpn9aM",
    authDomain: "icontroled.firebaseapp.com",
    databaseURL: "https://icontroled.firebaseio.com",
    projectId: "icontroled",
    storageBucket: "icontroled.appspot.com",
    messagingSenderId: "89600774314",
    appId: "1:89600774314:web:a9d31779455b5ab5a7c0d3"
  };

// initialize firebase instance
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
// initialize firestore
const firestore = getFirestore(firebase);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const store = createStore(rootReducer);

export { store, firestore, auth };
