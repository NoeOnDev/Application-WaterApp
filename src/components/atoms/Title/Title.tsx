import {Text, TextProps} from 'react-native';

export const Title: React.FC<TextProps> = ({children, ...props}) => {
  return (
    <Text style={{fontSize: 24, fontWeight: 'bold'}} {...props}>
      {children}
    </Text>
  );
};
