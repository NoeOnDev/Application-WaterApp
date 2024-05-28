import React from 'react';
import {StatusBar, StatusBarProps} from 'react-native';

interface CustomStatusBarProps extends StatusBarProps {}

export const CustomStatusBar: React.FC<CustomStatusBarProps> = props => {
  return <StatusBar {...props} />;
};
