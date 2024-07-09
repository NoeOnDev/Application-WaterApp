export interface Street {
  id: number;
  name: string;
}

export interface StreetsQueryResult {
  data: Street[];
  isLoading: boolean;
  isError: boolean;
}
