import React, { useState, useEffect } from 'react';
import ButtonSubmit from '../../components/button';
import {InputWithLabelComponent} from '../../components/inputField';
import fetchTenantId, { edit } from '../actions';

const EditTenantPage = (props) => {
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
    console.log({name, email, numberOfEmployees, location})
    // edit({name, email, numberOfEmployees, location});
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabelComponent inputText={name} inputName='name'  inputType='text' labelText='Name' inputAction={(event) => setName(event.target.value)} />
      <InputWithLabelComponent inputText={email} inputName='email' inputType='email' labelText='Email' inputAction={(event) => setEmail(event.target.value)} />
      <InputWithLabelComponent inputText={numberOfEmployees} inputName='numberOfEmployees' inputType='number' labelText='Number of Employees' inputAction={(event) => setNumberOfEmployees(event.target.value)} />
      <InputWithLabelComponent inputText={location} inputName='location' inputType='text' labelText='Location' inputAction={(event) => setLocation(event.target.value)} />
      <br />
      <ButtonSubmit buttonText='Save' />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default EditTenantPage;