import React from 'react';
import {View} from 'react-native';
import {SafeArea} from '../../organism';
import {NotificationForm} from '../../organism';
import {styles} from './StylesHomeScreenAdmin';

export function HomeScreen() {
  return (
    <SafeArea backgroundColor="#0071CE">
      <View style={styles.container}>
        <NotificationForm />
      </View>
    </SafeArea>
  );
}
