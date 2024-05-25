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
      <Stack.Screen name="Inicio de sesión" component={LoginScreen} />
      <Stack.Screen
        name="Recuperar contraseña"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
