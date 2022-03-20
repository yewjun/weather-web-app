import React from "react";
import { useCustomHistoryState } from "pages/WeatherPage/hooks/useCustomHistory";

const HistoryContext = React.createContext();

// custom provider to allow children access to history state
export function HistoryProvider({ children }) {
  const customHistoryState = useCustomHistoryState([]);
  return (
    <HistoryContext.Provider value={customHistoryState}>
      {children}
    </HistoryContext.Provider>
  );
}

export const useHistory = () => React.useContext(HistoryContext);
