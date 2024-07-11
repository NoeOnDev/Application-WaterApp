// src/hooks/useStreets.tsx
import axios from 'axios';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {Street} from '../types/api';
import {API_URL} from '@env';

const fetchStreets = async (): Promise<Street[]> => {
  const {data} = await axios.get(`${API_URL}/streets`);
  return data;
};

export const useStreets = (): UseQueryResult<
  {label: string; value: string}[],
  Error
> => {
  return useQuery({
    queryKey: ['streets'],
    queryFn: fetchStreets,
    select: data =>
      data.map(street => ({
        label: street.name,
        value: street.name.toLowerCase(),
      })),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 10,
  });
};
