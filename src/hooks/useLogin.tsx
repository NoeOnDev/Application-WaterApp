// src/hooks/useLogin.tsx
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    username: string;
    email: string;
    role: string;
  };
}

const loginUser = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const {data} = await axios.post(`${API_URL}/users/login`, credentials);
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(
          'Error inesperado durante el inicio de sesión. Inténtalo de nuevo.',
        );
      }
    },
    onSuccess: async (data: LoginResponse) => {
      console.log('Inicio de sesión exitoso:', data);
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('userRole', data.user.role);
      await AsyncStorage.setItem('userEmail', data.user.email);
    },
  });
};
