import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../components/screens';
import HomeTabsAdmin from './HomeTabsAdmin';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShadowVisible: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: 'Registro de usuario',
          headerStyle: {backgroundColor: '#0071CE'},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabsAdmin}
        options={{headerShown: false, headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
}
