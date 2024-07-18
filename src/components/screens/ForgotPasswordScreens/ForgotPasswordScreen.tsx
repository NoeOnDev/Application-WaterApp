import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesForgotPasswordScreens';
import {useRequestVerificationCode} from '../../../hooks/useForgotPassword';
import {Dialog, ALERT_TYPE} from 'react-native-alert-notification';

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
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Éxito',
          textBody: 'Código de verificación enviado',
          button: 'Ok',
          onHide: () => {
            navigation.navigate('VerificationCode');
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
