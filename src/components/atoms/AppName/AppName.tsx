// src/components/atoms/AppName/AppName.tsx
import React from 'react';
import {TextStyle, Text, View, ViewStyle} from 'react-native';
import AppNameSVG from '../../../assets/name.svg';
import {styles} from './StylesAppName';

interface AppNameProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const AppName: React.FC<AppNameProps> = ({style, textStyle}) => {
  return (
    <View style={[style, styles.container]}>
      <AppNameSVG width="7%" height="100%" />
      <Text style={[textStyle, styles.text]}>WaterApp</Text>
    </View>
  );
};
