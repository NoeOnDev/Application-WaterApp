// src/hooks/useNotification.tsx
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotificationPayload {
  message: string;
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
