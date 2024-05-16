import {View, Text} from 'react-native'
import {ButtonAuth} from '../atoms/ButtonAuth/ButtonAuth'
import {Input} from '../atoms/inputAuth/InputAuth'

export function LoginPage() {
  return (
    <View>
      <Text>Login Page</Text>
      <Input value="" onChangeText={() => {}} placeholder="Username" />
      <Input value="" onChangeText={() => {}} placeholder="Password" />
      <ButtonAuth title="Login" onPress={() => {}} />
    </View>
  )
}
