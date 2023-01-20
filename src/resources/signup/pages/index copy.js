import React, { useState } from 'react';
import ButtonSubmit from '../../components/button';
import InputComponent from '../../components/inputField';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SingupPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User datails: ', username, name, email, phone, address);
    // Perform login logic here

  };


  const provider = new GoogleAuthProvider();
  const signInWithGoogle = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(credential, token, user)
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
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputComponent inputName='username' inputType='text' labelText='Username' inputAction={(event) => setUsername(event.target.value)} />
      <InputComponent inputName='name' inputType='text' labelText='Name' inputAction={(event) => setName(event.target.value)} />
      <InputComponent inputName='email' inputType='email' labelText='Email' inputAction={(event) => setEmail(event.target.value)} />
      <InputComponent inputName='phone' inputType='number' labelText='Phone' inputAction={(event) => setPhone(event.target.value)} />
      <InputComponent inputName='address' inputType='text' labelText='Address' inputAction={(event) => setAddress(event.target.value)} />
      <br />
      <ButtonSubmit buttonText='Sing Up' />
    </form>
  );
};

export default SingupPage;