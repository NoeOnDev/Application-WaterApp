import {View} from 'react-native';
import { LoginForm } from '../organism/LoginForm/LoginForm';

export function LoginPage() {
  return (
    <View>
      <LoginForm onSubmit={(username, password) => console
        .log(`username: ${username}, password: ${password}`)} />
    </View>
  );
}
