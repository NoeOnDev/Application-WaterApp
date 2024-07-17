// src/hooks/useNotification.tsx
import axios from 'axios';
import {useMutation, useQuery} from '@tanstack/react-query';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotificationPayload {
  message: string;
  streets: string[];
}

interface Notification {
  notification_id: number;
  message: string;
  created_at: string;
  streets: string[];
}

const sendNotification = async (notification: NotificationPayload) => {
  const token = await AsyncStorage.getItem('token');
  const {data} = await axios.post(
    `${API_URL}/notifications/send`,
    notification,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};

export const useSendNotification = () => {
  return useMutation({
    mutationFn: sendNotification,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Error inesperado. Inténtalo de nuevo.');
      }
    },
  });
};

const fetchNotificationHistory = async (): Promise<Notification[]> => {
  const token = await AsyncStorage.getItem('token');
  const {data} = await axios.get(`${API_URL}/notifications/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useNotificationHistory = () => {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotificationHistory,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 10,
  });
};
