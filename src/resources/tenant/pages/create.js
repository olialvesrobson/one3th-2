import React, { useState } from 'react';
import ButtonSubmit from '../../components/button';
import InputComponent from '../../components/inputField';

const CreateTenantPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User datails: ', name, email, numberOfEmployees, location);
    // Perform login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputComponent inputName='name' inputType='text' labelText='Name' inputAction={(event) => setName(event.target.value)} />
      <InputComponent inputName='email' inputType='email' labelText='Email' inputAction={(event) => setEmail(event.target.value)} />
      <InputComponent inputName='numberOfEmployees' inputType='number' labelText='Number of Employees' inputAction={(event) => setNumberOfEmployees(event.target.value)} />
      <InputComponent inputName='location' inputType='text' labelText='Location' inputAction={(event) => setLocation(event.target.value)} />
      <br />
      <ButtonSubmit buttonText='Create' />
    </form>
  );
};

export default CreateTenantPage;