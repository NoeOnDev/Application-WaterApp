import {View, Text} from 'react-native'
import { LoginForm } from '../molecules'

export function LoginPage() {

  return (
    <View>
      <Text>Login Page</Text>
      <LoginForm onSubmit={(username, password) => console
        .log(`Username: ${username}, Password: ${password}`)} />
    </View>
  )
}