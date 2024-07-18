import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';
import {useResetPassword} from '../../../hooks/useForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dialog, ALERT_TYPE} from 'react-native-alert-notification';

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
              Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Éxito',
                textBody: 'Contraseña restablecida',
                button: 'Ok',
                onHide: () => {
                  navigation.navigate('Login');
                },
              });
            },
            onError: error => {
              Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: error.message,
                button: 'Ok',
              });
            },
          },
        );
      } catch (error) {
        if (error instanceof Error) {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: error.message,
            button: 'Ok',
          });
        } else {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: 'Ocurrió un error desconocido',
            button: 'Ok',
          });
        }
      }
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Las contraseñas no coinciden',
        button: 'Ok',
      });
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
