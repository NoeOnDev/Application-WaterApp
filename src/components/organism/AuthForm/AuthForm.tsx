import React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import {LabelAndInput} from '../../molecules';
import {ButtonAuth, LinkButton} from '../../atoms';
import {styles} from './StylesAuthForm';

export interface FormField {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

interface AuthFormProps {
  fields: FormField[];
  buttonTitle: string;
  buttonOnPress: () => void;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  linkText: string;
  linkOnPress: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  buttonTitle,
  buttonOnPress,
  buttonStyle,
  buttonTextStyle,
  linkText,
  linkOnPress,
}) => {
  return (
    <View style={styles.container}>
      {fields.map((field, index) => (
        <LabelAndInput
          key={index}
          label={field.label}
          value={field.value}
          onChangeText={field.onChangeText}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
        />
      ))}
      <ButtonAuth
        title={buttonTitle}
        onPress={buttonOnPress}
        buttonStyle={buttonStyle}
        textStyle={buttonTextStyle}
      />
      <LinkButton text={linkText} onPress={linkOnPress} />
    </View>
  );
};
