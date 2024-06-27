import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';

export function ResetPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Nueva contraseña',
      value: newPassword,
      onChangeText: setNewPassword,
      placeholder: 'Introduce tu nueva contraseña',
      secureTextEntry: true,
    },
    {
      type: 'input',
      label: 'Confirmar contraseña',
      value: confirmPassword,
      onChangeText: setConfirmPassword,
      placeholder: 'Confirma tu nueva contraseña',
      secureTextEntry: true,
    },
  ];

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Nueva contraseña:', newPassword);
      navigation.navigate('Login');
    } else {
      console.log('Las contraseñas no coinciden');
    }
  };

  return (
    <SafeArea backgroundColor="#0071CE">
      <AuthForm
        fields={fields}
        buttonTitle="Restablecer contraseña"
        buttonOnPress={handleResetPassword}
        linkText="Volver al inicio de sesión"
        linkOnPress={() => navigation.navigate('Login')}
      />
    </SafeArea>
  );
}
