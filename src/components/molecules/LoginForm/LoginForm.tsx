import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonAuth, Input} from '../../atoms';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <ButtonAuth title="Login" onPress={() => onSubmit(username, password)} />
    </View>
  );
};
