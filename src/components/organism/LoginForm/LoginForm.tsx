import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonAuth} from '../../atoms';
import {LabelAndInput} from '../../molecules';
import {styles} from './StylesLoginForm';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <LabelAndInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <LabelAndInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <ButtonAuth title="Login" onPress={() => onSubmit(username, password)} />
    </View>
  );
};
