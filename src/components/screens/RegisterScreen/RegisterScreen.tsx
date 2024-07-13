import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ActivityIndicator,
  Text,
} from 'react-native';
import {AuthForm, FormField, SafeArea} from '../../organism';
import {LinkButton} from '../../atoms';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/types';
import {useStreets} from '../../../hooks/useStreets';
import {useRegister} from '../../../hooks/useRegister';
import {styles} from './StylesRegisterScreen';

export const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [street, setStreet] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {data: streets, isLoading, isError} = useStreets();
  const {mutate: register} = useRegister();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (isError) {
      console.error('Error fetching streets:', isError);
    } else {
      console.log('Streets data:', streets);
    }
  }, [streets, isError]);

  const streetOptions = streets || [];

  const fields: FormField[] = [
    {
      type: 'input',
      label: 'Nombre Completo',
      value: username,
      onChangeText: setUsername,
      placeholder: 'Introduce tu nombre completo',
    },
    {
      type: 'dropdown',
      label: 'Nombre de la Calle',
      value: street,
      onValueChange: setStreet,
      options: streetOptions,
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
  ];

  const handleRegister = () => {
    const userData = {
      username,
      street,
      email,
      password,
    };
    register(userData, {
      onSuccess: data => {
        console.log('Registro exitoso', data);
      },
      onError: error => {
        console.error('Error en el registro', error);
      },
    });
  };

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View style={styles.content}>
          {isLoading ? (
            <ActivityIndicator />
          ) : isError ? (
            <Text>Error al cargar las calles</Text>
          ) : (
            <>
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
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};
