// src/components/screens/NotificationUserScreen/NotificationUserScreen.tsx
import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {SafeArea} from '../../organism';
import {styles} from './StylesNotificationUserScreen';
import {useUserNotifications} from '../../../hooks/useNotification';

interface UserNotification {
  notification_id: number;
  message: string;
  created_at: string;
  street: string;
}

export function NotificationUserScreen() {
  const {data: notifications, isLoading, isError} = useUserNotifications();

  const renderNotification = ({item}: {item: UserNotification}) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.timestamp}>
        {new Date(item.created_at).toLocaleString()}
      </Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.streets}>Calle: {item.street}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <SafeArea>
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      </SafeArea>
    );
  }

  if (isError) {
    return (
      <SafeArea>
        <View style={styles.container}>
          <Text>Error al cargar las notificaciones</Text>
        </View>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <View style={styles.container}>
        {!notifications || notifications.length === 0 ? (
          <Text style={styles.noNotificationsMessage}>
            No hay notificaciones
          </Text>
        ) : (
          <FlatList
            data={notifications}
            renderItem={renderNotification}
            keyExtractor={item => item.notification_id.toString()}
          />
        )}
      </View>
    </SafeArea>
  );
}
