// src/components/atoms/LabelAuth/LabelAuth.tsx
import React from 'react';
import {Text} from 'react-native';
import {styles} from './StylesLabelAuth';

interface LabelAuthProps {
  text: string;
}

export const LabelAuth: React.FC<LabelAuthProps> = ({text}) => {
  return <Text style={styles.label}>{text}</Text>;
};
