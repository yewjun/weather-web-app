import React from "react";
import { useCustomHistoryState } from "../pages/TodayWeather/hooks/useCustomHistory";

const HistoryContext = React.createContext();

export function HistoryProvider({ children }) {
  const customHistoryState = useCustomHistoryState([]);
  return (
    <HistoryContext.Provider value={customHistoryState}>
      {children}
    </HistoryContext.Provider>
  );
}

export const useHistory = () => React.useContext(HistoryContext);
