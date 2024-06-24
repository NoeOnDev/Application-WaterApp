import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  HomeScreen,
  ProfileScreen,
  HistoryScreen,
} from '../components/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabsAdmin() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeAdmin"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

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
