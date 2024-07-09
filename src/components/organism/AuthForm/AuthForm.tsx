// src/components/organism/AuthForm/AuthForm.tsx
import React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import {LabelAndInput, LabelAndDropdown} from '../../molecules';
import {ButtonAuth, LinkButton} from '../../atoms';
import {styles} from './StylesAuthForm';

export interface FormField {
  type: 'input' | 'dropdown';
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  onValueChange?: (itemValue: string) => void;
  options?: {label: string; value: string}[];
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
      {fields.map((field, index) => {
        if (field.type === 'input') {
          return (
            <LabelAndInput
              key={index}
              label={field.label}
              value={field.value}
              onChangeText={field.onChangeText ?? (() => {})}
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry}
            />
          );
        } else if (field.type === 'dropdown') {
          return (
            <LabelAndDropdown
              key={index}
              label={field.label}
              selectedValue={field.value}
              onValueChange={field.onValueChange ?? (() => {})}
              options={field.options ?? []}
              placeholder={field.placeholder}
            />
          );
        }
        return null;
      })}
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
