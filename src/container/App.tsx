// src/container/App.tsx
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppNavigation} from './AppNavigation';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}
