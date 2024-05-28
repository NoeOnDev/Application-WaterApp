import React from 'react';
import {View} from 'react-native';
import LogoSVG from '../../../assets/logo.svg';
import {styles} from './StylesLogo';

export const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSVG width={150} height={200} />
    </View>
  );
};
