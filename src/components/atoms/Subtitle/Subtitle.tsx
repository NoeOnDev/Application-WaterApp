import {Text, TextProps} from 'react-native';
import {styles} from './StylesSubtitle';

export const Subtitle: React.FC<TextProps> = ({children, ...props}) => {
  return (
    <Text style={styles.subtitle} {...props}>
      {children}
    </Text>
  );
};
