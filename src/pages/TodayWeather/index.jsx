import * as React from "react";
import SearchInputView from "./components/SearchInput";
import SearchHistoryView from "./components/SearchHistory";
import { HistoryProvider } from "./providers/HistoryProvider";

const TodayWeather = () => {
  return (
    <div className="App">
      <HistoryProvider>
        <SearchInputView />
        <SearchHistoryView />
      </HistoryProvider>
    </div>
  );
};

export default TodayWeather;
