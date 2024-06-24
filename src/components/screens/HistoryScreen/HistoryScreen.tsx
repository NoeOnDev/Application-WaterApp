import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeArea} from '../../organism';
import {styles} from './StylesHistoryScreen';

interface Notification {
  streets: string[];
  message: string;
  timestamp: Date;
}

interface HistoryScreenProps {
  notifications: Notification[];
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({
  notifications,
}) => {
  const renderNotification = ({item}: {item: Notification}) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.timestamp}>{item.timestamp.toString()}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.streets}>Calles: {item.streets.join(', ')}</Text>
    </View>
  );

  return (
    <SafeArea backgroundColor="#0071CE">
      <View style={styles.container}>
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeArea>
  );
};
