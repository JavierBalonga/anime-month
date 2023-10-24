import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter as Router } from 'react-router-dom';

import { TooltipProvider } from './components/ui/tooltip.tsx';
import { ThemeProvider } from './contexts/theme-provider.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
);
