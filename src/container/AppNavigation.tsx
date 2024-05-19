import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from '../components/Screens/LoginScreen/LoginScreen';
import {HomePage} from '../components/Screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}
