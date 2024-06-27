import React, {useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Correo electrónico',
      value: email,
      onChangeText: setEmail,
      placeholder: 'Introduce tu correo electrónico',
    },
  ];

  const handleSendVerificationCode = () => {
    console.log('Email:', email);
    navigation.navigate('VerificationCode');
  };

  return (
    <SafeArea backgroundColor="#0071CE">
      <AuthForm
        fields={fields}
        buttonTitle="Enviar código de verificación"
        buttonOnPress={handleSendVerificationCode}
        linkText="Volver al inicio de sesión"
        linkOnPress={() => navigation.navigate('Login')}
      />
    </SafeArea>
  );
}
