import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../components/screens';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false, headerShadowVisible: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShadowVisible: false, headerTitle: ''}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShadowVisible: false, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}
