// src/components/atoms/LinkButton/LinkButton.tsx
import React from 'react';
import {Text, TouchableOpacity, TextStyle} from 'react-native';
import {styles} from './StylesLinkButton';

interface LinkButtonProps {
  text: string;
  onPress: () => void;
  style?: TextStyle;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};
