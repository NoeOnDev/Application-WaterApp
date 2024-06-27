import React, {useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';

export function VerificationCodeScreen() {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Código de verificación',
      value: verificationCode,
      onChangeText: setVerificationCode,
      placeholder: 'Introduce el código de verificación',
    },
  ];

  const handleVerifyCode = () => {
    console.log('Código de verificación:', verificationCode);
    navigation.navigate('ResetPassword');
  };

  return (
    <SafeArea backgroundColor="#0071CE">
      <AuthForm
        fields={fields}
        buttonTitle="Verificar código"
        buttonOnPress={handleVerifyCode}
        linkText="Volver al inicio de sesión"
        linkOnPress={() => navigation.navigate('Login')}
      />
    </SafeArea>
  );
}
