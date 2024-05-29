import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './StylesInputStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const InputAuth: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const clearText = () => onChangeText('');

  return (
    <View
      style={isFocused ? styles.inputContainerFocused : styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry && !showPassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {secureTextEntry && (isFocused || value) ? (
        <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      ) : (
        value && (
          <TouchableOpacity onPress={clearText} style={styles.icon}>
            <Icon name="close" size={24} color="gray" />
          </TouchableOpacity>
        )
      )}
    </View>
  );
};
