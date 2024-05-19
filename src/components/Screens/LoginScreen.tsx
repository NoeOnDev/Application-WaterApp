import {useState} from 'react';
import {View} from 'react-native';
import {AuthForm} from '../organism/AuthForm/AuthForm';
import {Logo} from '../atoms';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <View>
      <Logo />
      <AuthForm
        fields={fields}
        buttonTitle="Iniciar sesión"
        buttonOnPress={handleLogin}
      />
    </View>
  );
};
