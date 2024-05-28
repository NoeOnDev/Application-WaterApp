import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AuthTemplate} from '../../template/AuthTemplate';
import {ButtonAuth} from '../../atoms';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import { styles } from './StylesLoginScreen';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fields = [
    {
      label: 'Correo electrónico',
      value: email,
      onChangeText: setEmail,
      placeholder: 'Introduce tu correo electrónico',
    },
    {
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
  };

  const handleForgotPassword = () => {
    navigation.navigate('Recuperar contraseña');
  };

  const handleCreateAccount = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeArea backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <AuthTemplate
          fields={fields}
          buttonTitle="Iniciar sesión"
          buttonOnPress={handleLogin}
          linkText="¿Olvidaste tu contraseña?"
          linkOnPress={handleForgotPassword}
        />
        <ButtonAuth
          title="Crear nueva cuenta"
          onPress={handleCreateAccount}
          buttonStyle={styles.createAccountButton}
          textStyle={styles.createAccountButtonText}
        />
      </View>
    </SafeArea>
  );
};

