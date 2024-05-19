import {TouchableOpacity, Text} from 'react-native';
import {styles} from './StylesButtonAuth';

interface ButtonAuthProps {
  title: string;
  onPress: () => void;
}

export const ButtonAuth: React.FC<ButtonAuthProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
