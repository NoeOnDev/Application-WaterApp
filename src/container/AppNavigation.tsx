import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from '../components/pages/LoginPage';
import {HomePage} from '../components/pages/HomePage';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}
