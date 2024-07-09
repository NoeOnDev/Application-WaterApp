// src/components/hooks/getStreets.tsx
import axios from 'axios';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import { Street } from '../../types/api';

const fetchStreets = async (): Promise<Street[]> => {
  const {data} = await axios.get('http://192.168.178.30:9020/streets');
  return data;
};

export const useStreets = (): UseQueryResult<Street[], Error> => {
  return useQuery<Street[], Error>({
    queryKey: ['streets'],
    queryFn: fetchStreets,
  });
};
