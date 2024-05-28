import React from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './StylesParagraph';

export const Paragraph: React.FC<TextProps> = ({children, ...props}) => {
  return (
    <Text style={styles.paragraph} {...props}>
      {children}
    </Text>
  );
};
