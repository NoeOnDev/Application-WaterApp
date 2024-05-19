import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../components/screens/LoginScreen';
import {HomeScreen} from '../components/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio de sesión" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
