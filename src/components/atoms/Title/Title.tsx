import {Text, TextProps} from 'react-native';
import {styles} from './StylesTitle';

export const Title: React.FC<TextProps> = ({children, ...props}) => {
  return <Text style={styles.title} {...props}>{children}</Text>;
};
