import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import {AuthForm, FormField} from '../../organism';
import {ButtonAuth, Logo, AppName} from '../../atoms';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesLoginScreen';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
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
    <SafeArea backgroundColor="#0071CE">
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
  );
};
