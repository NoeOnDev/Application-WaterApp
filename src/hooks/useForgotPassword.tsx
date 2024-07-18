// src/hooks/useForgotPassword.tsx
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface VerifyCodePayload {
  userId: number;
  code: string;
}

interface ResetPasswordPayload {
  userId: number;
  newPassword: string;
}

export const requestVerificationCode = async (email: string): Promise<void> => {
  const {data} = await axios.post(`${API_URL}/users/request-verification-code`, {
    email,
  });
  await AsyncStorage.setItem('userId', data.userId.toString());
  return data;
};

export const useRequestVerificationCode = () => {
  return useMutation({
    mutationFn: requestVerificationCode,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Error inesperado. Inténtalo de nuevo.');
      }
    },
  });
};

export const verifyCode = async ({
  userId,
  code,
}: VerifyCodePayload): Promise<void> => {
  console.log(`Verificando código para userId: ${userId}`);
  const {data} = await axios.post(`${API_URL}/users/verify-code`, {userId, code});
  return data;
};

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: verifyCode,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Error inesperado. Inténtalo de nuevo.');
      }
    },
  });
};

export const resetPassword = async ({
  userId,
  newPassword,
}: ResetPasswordPayload): Promise<void> => {
  console.log(`Reseteando contraseña para userId: ${userId}`);
  const {data} = await axios.post(`${API_URL}/users/reset-password`, {
    userId,
    newPassword,
  });
  return data;
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Error inesperado. Inténtalo de nuevo.');
      }
    },
  });
};
