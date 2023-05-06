import React from "react";
import Pokedex from "./pokedex/Pokedex";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  );
};

export default App;
