import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import {styles} from './StylesInputMessage';

interface InputMessageProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const InputMessage: React.FC<InputMessageProps> = ({
  value,
  onChangeText,
  placeholder,
  ...rest
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline
      numberOfLines={4}
      {...rest}
    />
  );
};
