import React, { useState } from 'react';
import InputComponent from '../../components/inputField';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import {SignInWithGoogle, SignOut} from '../actions/index';
// import { auth } from '../../config/firestore/store';
// import { onAuthStateChanged } from "firebase/auth";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppContainer from '../../components/container';

const SingupPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    setUsername(data.get('email'));
    setName(data.get('name'));
    setEmail(data.get('password'));
    setPhone(data.get('phone'));
    setAddress(data.get('address'));
    console.log('User datails: ', username, name, email, phone, address);
    // Perform login logic here

  };


  const provider = new GoogleAuthProvider();
  const signUpWithGoogle = (event) => {
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
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const renderContent = () => {
    return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          { /*<LockOutlinedIcon /> */}
        </Avatar>
        
        <InputComponent 
          inputName='username' 
          autoFocus='true' 
          inputId='username' 
          inputType='text' 
          labelText='Username:'
          fullWidth='true' 
          inputAction={(event) => setUsername(event.target.value)} 
        />
        <InputComponent 
          inputName='Name' 
          inputType='text' 
          labelText='Name:' 
          inputId='name'
          fullWidth='true'
          inputAction={(event) => setName(event.target.value)} 
        />
        <InputComponent 
          inputName='Email' 
          inputType='email' 
          labelText='Email:' 
          inputId='email'
          fullWidth='true'
          inputAction={(event) => setEmail(event.target.value)} 
        />
        <InputComponent 
          inputName='Phone' 
          inputType='phone' 
          labelText='Phone:' 
          inputId='phone'
          fullWidth='true'
          inputAction={(event) => setPhone(event.target.value)} 
        />
        <InputComponent 
          inputName='Address' 
          inputType='text' 
          labelText='Address:' 
          inputId='address'
          fullWidth='true'
          inputAction={(event) => setAddress(event.target.value)} 
        />
      
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <br/><br/>
        <Button
          type="button"
          onClick={signUpWithGoogle}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up With Google
        </Button>
        <Grid container>
          
          <Grid item>
            <Link href="/signin" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>

    );
  }
  return (
    <AppContainer 
      title='Sign Up'
      content={renderContent} />
  );
};

export default SingupPage;