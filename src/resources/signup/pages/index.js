import React, { useState } from 'react';
import ButtonSubmit from '../../components/button';
import InputComponent from '../../components/inputField';

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