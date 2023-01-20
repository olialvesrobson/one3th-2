import React, { useState, useEffect } from 'react';
import InputComponent from '../../components/inputField';
import Button from '@material-ui/core/Button';
// import { onAuthStateChanged } from "firebase/auth";
import Box from '@material-ui/core/Box';
import AppContainer from '../../components/container';

const EditTenantPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  // fetchTenantId({tenantId: 0});

  useEffect(() => {
    setName('Dude');
    setEmail('eduardo@dudegardencare.com.au');
    setNumberOfEmployees(5);
    setLocation('Sydney');


  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    setName(data.get('name'));
    setEmail(data.get('email'));
    setNumberOfEmployees(data.get('numberOfEmployees'));
    setLocation(data.get('location'));
    // edit({name, email, numberOfEmployees, location});
    try {
      console.log({name, email, numberOfEmployees, location});
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const renderContent = () => {
    return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
        
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
          inputName='NumberOfEmployees' 
          inputType='text' 
          labelText='Number of Employees:' 
          inputId='numberOfEmployees'
          fullWidth='true'
          inputAction={(event) => setNumberOfEmployees(event.target.value)} 
        />
        <InputComponent 
          inputName='location' 
          inputType='text' 
          labelText='Location:' 
          inputId='location'
          fullWidth='true'
          inputAction={(event) => setLocation(event.target.value)} 
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save
        </Button>
        
      </Box>

    );
  }
  return (
    <AppContainer 
      title='Edit Tenant'
      content={renderContent} />
  );
};

export default EditTenantPage;