import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import {AuthForm, FormField} from '../../organism';
import {ButtonAuth, Logo, AppName} from '../../atoms';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesLoginScreen';
import {useLogin} from '../../../hooks/useLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginScreenProps {
  setUserRole: (role: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({setUserRole}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {mutate: loginUser} = useLogin();

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Correo electrónico',
      value: email,
      onChangeText: setEmail,
      placeholder: 'Introduce tu correo electrónico',
    },
    {
      type: 'input',
      label: 'Contraseña',
      value: password,
      onChangeText: setPassword,
      placeholder: 'Introduce tu contraseña',
      secureTextEntry: true,
    },
  ];

  const handleLogin = () => {
    const credentials = {
      email,
      password,
    };
    loginUser(credentials, {
      onSuccess: async data => {
        setUserRole(data.user.role);
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('userRole', data.user.role);
        await AsyncStorage.setItem('userEmail', data.user.email);

        navigation.reset({
          index: 0,
          routes: [
            {name: data.user.role === 'Admin' ? 'HomeAdmin' : 'HomeUser'},
          ],
        });
      },
      onError: error => {
        const errorMessage =
          error.response?.data?.message ||
          'Hubo un error al iniciar sesión. Inténtalo de nuevo.';
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error en el Inicio de Sesión',
          textBody: errorMessage,
          button: 'Aceptar',
        });
      },
    });
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <AlertNotificationRoot>
      <SafeArea>
        {!isKeyboardVisible && <Logo style={styles.logo} />}
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
          <AuthForm
            fields={fields}
            buttonTitle="Iniciar sesión"
            buttonOnPress={handleLogin}
            linkText="¿Olvidaste tu contraseña?"
            linkOnPress={handleForgotPassword}
          />
          {!isKeyboardVisible && (
            <View style={styles.bottomContainer}>
              <ButtonAuth
                title="Crear nueva cuenta"
                onPress={handleCreateAccount}
                buttonStyle={styles.createAccountButton}
                textStyle={styles.createAccountButtonText}
              />
              <AppName />
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeArea>
    </AlertNotificationRoot>
  );
};
