import * as React from "react";
import SearchInputView from "./components/SearchInput";
import SearchHistoryView from "./components/SearchHistory";
import WeatherDetails from "./components/WeatherDetails";
import { IDefaultLocation } from "constants/defaults";
import { useQueryWeather } from "./hooks/useQueryWeather";

const TodayWeather = () => {
  const [location, setLocation] = React.useState(() => IDefaultLocation);
  const { refetch } = useQueryWeather(location);

  React.useEffect(() => {
    if (location.id) refetch();
  }, [location, refetch]);

  return (
    <div className="App">
      <SearchInputView setLocation={setLocation} />
      <WeatherDetails locationId={location.id} />
      <SearchHistoryView
        selectedHistory={location}
        setSelectedHistory={setLocation}
        refetch={refetch}
      />
    </div>
  );
};

export default TodayWeather;
