import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './StylesInputMessage';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputMessageProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const InputMessage: React.FC<InputMessageProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const clearText = () => onChangeText('');

  return (
    <View
      style={isFocused ? styles.inputContainerFocused : styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={styles.colorPlaceholder.color}
        multiline
        numberOfLines={4}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textAlignVertical="top"
      />
      {value ? (
        <TouchableOpacity
          onPress={clearText}
          activeOpacity={0.7}
          style={styles.icon}>
          <Icon
            name="close"
            size={styles.icon.fontSize}
            color={styles.icon.color}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
