// src/components/screens/ForgotPasswordScreens/VerificationCodeScreen.tsx
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';
import {useVerifyCode} from '../../../hooks/useForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function VerificationCodeScreen() {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {mutate: verifyCode} = useVerifyCode();

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Código de verificación',
      value: verificationCode,
      onChangeText: setVerificationCode,
      placeholder: 'Introduce el código de verificación',
    },
  ];

  const handleVerifyCode = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) throw new Error('Usuario no encontrado');

      verifyCode(
        {userId: Number(userId), code: verificationCode},
        {
          onSuccess: () => {
            Alert.alert('Éxito', 'Código verificado');
            navigation.navigate('ResetPassword');
          },
          onError: error => {
            Alert.alert('Error', error.message);
          },
        },
      );
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', 'Ocurrió un error desconocido');
      }
    }
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <AuthForm
          fields={fields}
          buttonTitle="Verificar código"
          buttonOnPress={handleVerifyCode}
          linkText="Volver al inicio de sesión"
          linkOnPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeArea>
  );
}
