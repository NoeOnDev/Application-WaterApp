import {View, Text} from 'react-native';
import { ButtonAuth } from '../atoms/ButtonAuth';

export function LoginPage() {
  return (
    <View>
      <Text>Login Page</Text>
      <ButtonAuth title="Login" onPress={() => {}} />
    </View>
  );
}
