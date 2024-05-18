import React, {useState} from 'react';
import { AuthForm } from '../organism/AuthForm/AuthForm';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fields = [
    {
      label: 'Correo electrónico',
      value: email,
      onChangeText: (text: string) => setEmail(() => text),
      placeholder: 'Introduce tu correo electrónico',
    },
    {
      label: 'Contraseña',
      value: password,
      onChangeText: (text: string) => setPassword(() => text),
      placeholder: 'Introduce tu contraseña',
      secureTextEntry: true,
    },
  ];

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <AuthForm
      fields={fields}
      buttonTitle="Iniciar sesión"
      buttonOnPress={handleLogin}
    />
  );
};