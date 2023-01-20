import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import InputComponent from '../../components/inputField';
import {SignInWithGoogle} from '../actions/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppContainer from '../../components/container';


// const theme = createTheme();

export default function SinginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [signed, setSigned] = useState(false);
  // const [uid, setUid] = useState(null);


  function handleSignIn (event) {
    event.preventDefault();

    SignInWithGoogle(); 
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    setUsername(data.get('email'));
    setPassword(data.get('password'));
    
    console.log(username, password);
  };

  const contentRender = () => {
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
          inputName='password' 
          inputType='password' 
          labelText='Password:' 
          inputId='password'
          fullWidth='true'
          inputAction={(event) => setPassword(event.target.value)} 
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
          Sign In
        </Button>
        <br/><br/>

        <Button
          type="button"
          fullWidth
          onClick={handleSignIn}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In With Google
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <br/><br/>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <AppContainer 
      title='Sign In'
      content={contentRender} />
  );
}