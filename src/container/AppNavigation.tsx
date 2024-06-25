import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../components/screens';
import HomeTabsAdmin from './HomeTabsAdmin';
import HomeTabsUser from './HomeTabsUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const retrieveUserRole = async () => {
      const role = await AsyncStorage.getItem('userRole');
      if (role) {
        setUserRole(role);
      }
    };

    retrieveUserRole();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userRole === null ? (
          <>
            <Stack.Screen name="Login" options={{headerShown: false}}>
              {props => <LoginScreen {...props} setUserRole={setUserRole} />}
            </Stack.Screen>
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
          </>
        ) : userRole === 'admin' ? (
          <Stack.Screen
            name="HomeAdmin"
            component={HomeTabsAdmin}
            options={{headerShown: false, headerShadowVisible: false}}
          />
        ) : (
          <Stack.Screen
            name="HomeUser"
            component={HomeTabsUser}
            options={{headerShown: false, headerShadowVisible: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
