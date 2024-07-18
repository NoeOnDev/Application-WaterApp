import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';
import {useVerifyCode} from '../../../hooks/useForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dialog, ALERT_TYPE} from 'react-native-alert-notification';

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
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Éxito',
              textBody: 'Código verificado',
              button: 'Ok',
              onHide: () => {
                navigation.navigate('ResetPassword');
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
