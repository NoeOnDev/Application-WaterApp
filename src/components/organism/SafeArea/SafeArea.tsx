// src/components/organism/SafeArea/SafeArea.tsx
import React from 'react';
import {SafeAreaView} from 'react-native';
import {CustomStatusBar} from '../../atoms';
import {styles} from './StylesSafeArea';

interface SafeAreaProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const SafeArea: React.FC<SafeAreaProps> = ({
  children,
  backgroundColor = '#0071CE',
}) => {
  return (
    <>
      <CustomStatusBar
        backgroundColor={backgroundColor}
        barStyle="dark-content"
      />
      <SafeAreaView style={[styles.container, {backgroundColor}]}>
        {children}
      </SafeAreaView>
    </>
  );
};
