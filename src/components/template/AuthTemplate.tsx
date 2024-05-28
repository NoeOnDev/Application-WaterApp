import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {Logo} from '../atoms';
import {AuthForm} from '../organism';
import type {FormField} from '../organism';

interface AuthTemplateProps {
  fields: FormField[];
  buttonTitle: string;
  buttonOnPress: () => void;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  linkText: string;
  linkOnPress: () => void;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  fields,
  buttonTitle,
  buttonOnPress,
  buttonStyle,
  buttonTextStyle,
  linkText,
  linkOnPress,
}) => {
  return (
    <View>
      <Logo />
      <AuthForm
        fields={fields}
        buttonTitle={buttonTitle}
        buttonOnPress={buttonOnPress}
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
        linkText={linkText}
        linkOnPress={linkOnPress}
      />
    </View>
  );
};
