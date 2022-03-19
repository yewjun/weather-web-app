import * as React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";

import WeatherPage from "./pages/WeatherPage";
import { HistoryProvider } from "./providers/HistoryProvider";
import { queryClient } from "./queries";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HistoryProvider>
        <WeatherPage />
      </HistoryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
