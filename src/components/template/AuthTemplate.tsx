import React from 'react';
import {View} from 'react-native';
import {Logo} from '../atoms';
import {AuthForm} from '../organism';
import type {FormField} from '../organism';

interface AuthTemplateProps {
  fields: FormField[];
  buttonTitle: string;
  buttonOnPress: () => void;
  linkText: string;
  linkOnPress: () => void;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  fields,
  buttonTitle,
  buttonOnPress,
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
        linkText={linkText}
        linkOnPress={linkOnPress}
      />
    </View>
  );
};
