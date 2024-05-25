import {useState} from 'react';
import {AuthTemplate} from '../template/AuthTemplate';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const fields = [
    {
      label: 'Correo electrónico',
      value: email,
      onChangeText: setEmail,
      placeholder: 'Introduce tu correo electrónico',
    },
    {
      label: 'Contraseña',
      value: password,
      onChangeText: setPassword,
      placeholder: 'Introduce tu contraseña',
      secureTextEntry: true,
    },
  ];

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Recuperar contraseña');
  };

  return (
    <AuthTemplate
      fields={fields}
      buttonTitle="Iniciar sesión"
      buttonOnPress={handleLogin}
      linkText="¿Olvidaste tu contraseña?"
      linkOnPress={handleForgotPassword}
    />
  );
};
