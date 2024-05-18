import {View} from 'react-native';
import {LabelAndInput} from '../../molecules';
import {ButtonAuth} from '../../atoms';
import {styles} from './StylesAuthForm';

interface FormField {
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
}

export const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  buttonTitle,
  buttonOnPress,
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
      <ButtonAuth title={buttonTitle} onPress={buttonOnPress} />
    </View>
  );
};
