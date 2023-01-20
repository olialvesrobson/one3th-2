import { createStore, combineReducers, applyMiddleware } from 'redux';
import { firebaseReducer, getFirebase } from 'react-redux-firebase';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

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

/*
########section with applyMiddleware(thunk)##########
*/
const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(getFirebase)];

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    // reactReduxFirebase(firebase, rrfConfig),
    // reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, composedEnhancer)

  return store
}

//react redux firebase config
const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: configureStore.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

const auth = getAuth();
// initialize firestore
const firestore = getFirestore(firebase);
const storage = getStorage(firebase);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});


export { 
  configureStore, 
  firebase,
  firestore, 
  auth, 
  storage,
  rrfConfig,
  rrfProps
};
