import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import {AuthForm, FormField} from '../../organism';
import {ButtonAuth, Logo, AppName} from '../../atoms';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesLoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginScreenProps {
  setUserRole: (role: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({setUserRole}) => {
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

  const handleLogin = async () => {
    if (email === 'admin@gmail.com' && password === 'admin') {
      setUserRole('admin');
      await AsyncStorage.setItem('userRole', 'admin');
      await AsyncStorage.setItem('userEmail', email);
      navigation.navigate('HomeAdmin');
    } else if (email === 'user@gmail.com' && password === 'user') {
      setUserRole('user');
      await AsyncStorage.setItem('userRole', 'user');
      await AsyncStorage.setItem('userEmail', email);
      navigation.navigate('HomeUser');
    } else {
      console.log('Credenciales incorrectas');
    }
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
