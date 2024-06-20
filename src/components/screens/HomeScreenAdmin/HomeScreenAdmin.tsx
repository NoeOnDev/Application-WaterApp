import React from 'react';
import {View} from 'react-native';
import {NotificationForm} from '../../organism';
import {styles} from './StylesHomeScreenAdmin';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <NotificationForm />
    </View>
  );
}
