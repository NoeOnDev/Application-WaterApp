// src/hooks/useRegister.tsx
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {API_URL} from '@env';

export const registerUser = async (userData: {
  username: string;
  street: string;
  email: string;
  password: string;
}): Promise<void> => {
  const {data} = await axios.post(`${API_URL}/users/register`, userData);
  return data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Error inesperado. Inténtalo de nuevo.');
      }
    },
  });
};
