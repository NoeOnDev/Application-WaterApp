import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonAuth} from '../../atoms';
import {LabelAndInput} from '../../molecules';
import {styles} from './StylesAuthForm';

interface FieldProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

interface AuthFormProps {
  fields: FieldProps[];
  onSubmit: (values: string[]) => void;
  buttonText: string;
}

export const LoginForm: React.FC<AuthFormProps> = ({fields, onSubmit, buttonText}) => {
  const [values, setValues] = useState<string[]>(new Array(fields.length).fill(''));

  const handleChangeText = (index: number, text: string) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      {fields.map((field, index) => (
        <LabelAndInput
          key={index}
          label={field.label}
          value={values[index]}
          onChangeText={(text) => handleChangeText(index, text)}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
        />
      ))}
      <ButtonAuth title={buttonText} onPress={() => onSubmit(values)} />
    </View>
  );
};