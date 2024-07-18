// src/components/screens/ForgotPasswordScreens/ForgotPasswordScreen.tsx
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';
import {useRequestVerificationCode} from '../../../hooks/useForgotPassword';

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {mutate: sendVerificationCode} = useRequestVerificationCode();

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
    sendVerificationCode(email, {
      onSuccess: () => {
        Alert.alert('Éxito', 'Código de verificación enviado');
        navigation.navigate('VerificationCode');
      },
      onError: error => {
        Alert.alert('Error', error.message);
      },
    });
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <AuthForm
          fields={fields}
          buttonTitle="Enviar código de verificación"
          buttonOnPress={handleSendVerificationCode}
          linkText="Volver al inicio de sesión"
          linkOnPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeArea>
  );
}
