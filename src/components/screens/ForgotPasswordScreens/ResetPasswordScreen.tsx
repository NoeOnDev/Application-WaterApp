// src/components/screens/ForgotPasswordScreens/ResetPasswordScreen.tsx
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';
import {useResetPassword} from '../../../hooks/useForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ResetPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {mutate: resetPassword} = useResetPassword();

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

  const handleResetPassword = async () => {
    if (newPassword === confirmPassword) {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (!userId) throw new Error('Usuario no encontrado');

        resetPassword(
          {userId: Number(userId), newPassword},
          {
            onSuccess: () => {
              Alert.alert('Éxito', 'Contraseña restablecida');
              navigation.navigate('Login');
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
    } else {
      Alert.alert('Error', 'Las contraseñas no coinciden');
    }
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <AuthForm
          fields={fields}
          buttonTitle="Restablecer contraseña"
          buttonOnPress={handleResetPassword}
          linkText="Volver al inicio de sesión"
          linkOnPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeArea>
  );
}
