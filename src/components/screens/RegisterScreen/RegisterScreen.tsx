import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import { LinkButton } from '../../atoms';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesRegisterScreen';

export const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [street, setStreet] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Nombre Completo',
      value: fullName,
      onChangeText: setFullName,
      placeholder: 'Introduce tu nombre completo',
    },
    {
      type: 'dropdown',
      label: 'Calle',
      value: street,
      onValueChange: setStreet,
      options: [
        {label: 'ARANDANOS', value: 'arandanos'},
        {label: 'AZULEJO', value: 'azulejo'},
        {label: 'BOSQUES', value: 'bosques'},
        {label: 'CALLEJON', value: 'callejon'},
        {label: 'CAMELIA', value: 'camelia'},
        {label: 'CANELA', value: 'canela'},
        {label: 'CEREZO', value: 'cerezo'},
        {label: 'CIPRES', value: 'cipres'},
        {label: 'COLIBRI', value: 'colibri'},
        {label: 'DURAZNO', value: 'durazno'},
        {label: 'ENCINO', value: 'encino'},
        {label: 'ESMERALDA', value: 'esmeralda'},
      ],
      placeholder: 'Selecciona tu calle',
    },
    {
      type: 'input',
      label: 'Correo Electrónico',
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
    {
      type: 'input',
      label: 'Confirmar Contraseña',
      value: confirmPassword,
      onChangeText: setConfirmPassword,
      placeholder: 'Confirma tu contraseña',
      secureTextEntry: true,
    },
  ];

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }
    console.log('Nombre Completo:', fullName);
    console.log('Calle:', street);
    console.log('Email:', email);
    console.log('Password:', password);
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View style={styles.content}>
          <AuthForm
            fields={fields}
            buttonTitle="Registrarse"
            buttonOnPress={handleRegister}
            linkText=""
            linkOnPress={() => ({})}
          />
          {!isKeyboardVisible && (
            <LinkButton
              text="¿Ya tienes una cuenta?"
              onPress={() => navigation.navigate('Login')}
              style={styles.linkText}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};
