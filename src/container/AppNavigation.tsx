import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  ForgotPasswordScreen,
} from '../components/screens';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio de sesión"
        component={LoginScreen}
        options={{headerShown: false, headerShadowVisible: false}}
      />
      <Stack.Screen
        name="Recuperar contraseña"
        component={ForgotPasswordScreen}
        options={{headerShadowVisible: false, headerTitle: ''}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
