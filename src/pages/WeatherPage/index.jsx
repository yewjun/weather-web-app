import * as React from "react";
import SearchHistoryView from "./views/SearchHistoryView";
import TodayWeatherView from "./views/TodayWeatherView";
import { IDefaultLocation } from "constants/defaults";
import { useQueryWeather } from "./hooks/useQueryWeather";

const WeatherPage = () => {
  const [location, setLocation] = React.useState(() => IDefaultLocation);
  const { refetch } = useQueryWeather(location);

  React.useEffect(() => {
    if (location.id) refetch();
  }, [location, refetch]);

  return (
    <div className="App">
      <TodayWeatherView location={location} setLocation={setLocation} />
      <SearchHistoryView
        selectedHistory={location}
        setSelectedHistory={setLocation}
        refetch={refetch}
      />
    </div>
  );
};

export default WeatherPage;
