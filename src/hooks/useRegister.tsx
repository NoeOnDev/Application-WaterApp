import {useState} from 'react';
import axios from 'axios';
import {API_URL} from '@env';

interface RegisterData {
  username: string;
  street: string;
  email: string;
  password: string;
}

interface UseRegister {
  register: (data: RegisterData) => Promise<any>;
  isLoading: boolean;
  error: string | null;
}

export const useRegister = (): UseRegister => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Enviando datos al servidor:', data);
      const response = await axios.post(`${API_URL}/users/register`, data);
      return response;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error('Error en el registro:', err.message);
      } else {
        setError('Ocurrió un error desconocido.');
        console.error('Error en el registro: Ocurrió un error desconocido.');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {register, isLoading, error};
};
