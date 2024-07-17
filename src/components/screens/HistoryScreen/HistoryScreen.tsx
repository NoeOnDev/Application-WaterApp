// src/components/screens/HistoryScreen/HistoryScreen.tsx
import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useNotificationHistory} from '../../../hooks/useNotification';
import {SafeArea} from '../../organism';
import {styles} from './StylesHistoryScreen';

export const HistoryScreen: React.FC = () => {
  const {data: notifications, isLoading, isError} = useNotificationHistory();

  const renderNotification = ({item}: {item: any}) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toString()}
      </Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.streets}>Calles: {item.streets.join(', ')}</Text>
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

  if (isError || !notifications) {
    return (
      <SafeArea>
        <View style={styles.container}>
          <Text>Error al cargar el historial de notificaciones</Text>
        </View>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <View style={styles.container}>
        {notifications.length === 0 ? (
          <Text style={styles.noHistoryMessage}>
            No hay historial de notificaciones
          </Text>
        ) : (
          <FlatList
            data={notifications}
            renderItem={renderNotification}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </SafeArea>
  );
};
