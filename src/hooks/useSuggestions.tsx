// src/hooks/useSuggestions.tsx
import axios from 'axios';
import {useQuery, useMutation, UseQueryResult} from '@tanstack/react-query';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Suggestion {
  id: number;
  message: string;
  admin_id: number;
}

const fetchSuggestions = async (): Promise<Suggestion[]> => {
  const token = await AsyncStorage.getItem('token');
  const {data} = await axios.get(`${API_URL}/suggestions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useSuggestions = (): UseQueryResult<
  {id: number; label: string; value: string}[],
  Error
> => {
  return useQuery({
    queryKey: ['suggestions'],
    queryFn: fetchSuggestions,
    select: data =>
      data.map(suggestion => ({
        id: suggestion.id,
        label: suggestion.message,
        value: suggestion.message,
      })),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 10,
  });
};

const createSuggestion = async (suggestion: {
  message: string;
}): Promise<Suggestion> => {
  const token = await AsyncStorage.getItem('token');
  const {data} = await axios.post(`${API_URL}/suggestions/create`, suggestion, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useCreateSuggestion = () => {
  return useMutation({
    mutationFn: createSuggestion,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Error inesperado. Inténtalo de nuevo.');
      }
    },
  });
};

const deleteSuggestion = async (id: number): Promise<void> => {
  const token = await AsyncStorage.getItem('token');
  await axios.delete(`${API_URL}/suggestions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteSuggestion = () => {
  return useMutation({
    mutationFn: deleteSuggestion,
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(
          'Error inesperado al eliminar la sugerencia. Inténtalo de nuevo.',
        );
      }
    },
  });
};
