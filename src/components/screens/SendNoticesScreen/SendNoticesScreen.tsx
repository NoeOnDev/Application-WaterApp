import React from 'react';
import {View} from 'react-native';
import {SafeArea} from '../../organism';
import {NotificationForm} from '../../organism';
import {styles} from './StylesSendNoticesScreen';

interface Notification {
  streets: string[];
  message: string;
  timestamp: Date;
}

interface SendNoticesScreenProps {
  addNotification: (notification: Notification) => void;
}

export const SendNoticesScreen: React.FC<SendNoticesScreenProps> = ({
  addNotification,
}) => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <NotificationForm addNotification={addNotification} />
      </View>
    </SafeArea>
  );
};
