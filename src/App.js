import * as React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";

import TodayWeather from "./pages/TodayWeather";
import { HistoryProvider } from "./providers/HistoryProvider";
import { queryClient } from "./queries";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HistoryProvider>
        <TodayWeather />
      </HistoryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
