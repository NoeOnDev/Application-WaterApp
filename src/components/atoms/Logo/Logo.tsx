import React from 'react';
import {View, ViewStyle} from 'react-native';
import LogoSVG from '../../../assets/logo.svg';
import {styles} from './StylesLogo';

interface LogoProps {
  style?: ViewStyle;
}

export const Logo: React.FC<LogoProps> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <LogoSVG width="100%" height="100%" />
    </View>
  );
};
