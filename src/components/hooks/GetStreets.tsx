// src/components/hooks/GetStreets.tsx
import axios from 'axios';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {Street} from '../../types/api';
import {API_URL} from '@env';

const fetchStreets = async (): Promise<Street[]> => {
  const {data} = await axios.get(`${API_URL}/streets`);
  return data;
};

export const useStreets = (): UseQueryResult<Street[], Error> => {
  return useQuery<Street[], Error>({
    queryKey: ['streets'],
    queryFn: fetchStreets,
  });
};
