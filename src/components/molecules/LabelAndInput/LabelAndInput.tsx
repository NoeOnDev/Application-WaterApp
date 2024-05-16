import {View} from 'react-native';
import {LabelAuth, InputAuth} from '../../atoms';
import {styles} from './StylesLabelAndInput';

interface LabelledInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const LabelAndInput: React.FC<LabelledInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <LabelAuth text={label} />
      <InputAuth
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
