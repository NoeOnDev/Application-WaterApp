// src/hooks/useSuggestions.tsx
import axios from 'axios';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
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
  {label: string; value: string}[],
  Error
> => {
  return useQuery({
    queryKey: ['suggestions'],
    queryFn: fetchSuggestions,
    select: data =>
      data.map(suggestion => ({
        label: suggestion.message,
        value: suggestion.message,
      })),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 10,
  });
};
