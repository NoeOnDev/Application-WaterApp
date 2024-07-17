// src/components/screens/NotificationUserScreen/NotificationUserScreen.tsx
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeArea} from '../../organism';
import {styles} from './StylesNotificationUserScreen';

interface Notification {
  streets: string[];
  message: string;
  timestamp: Date;
}

const mockNotifications: Notification[] = [
  {
    streets: ['ARANDANOS'],
    message: 'A tu calle se le suministrará agua el próximo lunes.',
    timestamp: new Date(),
  },
];

export function NotificationUserScreen() {
  const renderNotification = ({item}: {item: Notification}) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.timestamp}>{item.timestamp.toString()}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.streets}>Calles: {item.streets.join(', ')}</Text>
    </View>
  );

  return (
    <SafeArea>
      <View style={styles.container}>
        {mockNotifications.length === 0 ? (
          <Text style={styles.noNotificationsMessage}>
            No hay notificaciones
          </Text>
        ) : (
          <FlatList
            data={mockNotifications}
            renderItem={renderNotification}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </SafeArea>
  );
}
