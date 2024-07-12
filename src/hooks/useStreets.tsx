// src/hooks/useStreets.tsx
import axios from 'axios';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {API_URL} from '@env';

export interface Street {
  id: number;
  name: string;
}

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
        value: street.name,
      })),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 10,
  });
};
