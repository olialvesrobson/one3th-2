import React, { useState } from 'react';
import ButtonSubmit from '../../components/button';
import InputComponent from '../../components/inputField';

const SinginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username: ', username);
    console.log('Password: ', password);
    // Perform login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputComponent inputName='username' inputType='text' labelText='Username:' inputAction={(event) => setUsername(event.target.value)} />
      <InputComponent inputName='password' inputType='password' labelText='Password:' inputAction={(event) => setPassword(event.target.value)} />
      <br />
      <ButtonSubmit buttonText='Sing In' />
    </form>
  );
};

export default SinginPage;