import React from 'react';
import {View} from 'react-native';
import {SafeArea} from '../../organism';
import {NotificationForm} from '../../organism';
import {styles} from './StylesSendNoticesScreen';

export function SendNoticesScreen() {
  return (
    <SafeArea backgroundColor="#0071CE">
      <View style={styles.container}>
        <NotificationForm />
      </View>
    </SafeArea>
  );
}
