import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { FavoriteProvider } from './favorites/contexts/FavoriteContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteProvider>
    </QueryClientProvider>
  );
};

export default App; 