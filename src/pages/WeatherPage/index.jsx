import * as React from "react";
import SearchHistoryView from "./views/SearchHistoryView";
import TodayWeatherView from "./views/TodayWeatherView";
import { IDefaultLocation } from "constants/constant";
import { useQueryWeather } from "./hooks/useQueryWeather";
import { useAllCountry } from "hooks/useList";

// main page
const WeatherPage = () => {
  const allCountry = useAllCountry();
  const [location, setLocation] = React.useState(() => IDefaultLocation);
  const { refetch, ...queryState } = useQueryWeather(location);

  React.useEffect(() => {
    if (location.id) refetch();
  }, [location, refetch]);

  return (
    <>
      <TodayWeatherView
        location={location}
        setLocation={setLocation}
        allCountry={allCountry}
        queryState={queryState}
      />
      <SearchHistoryView
        selectedHistory={location}
        setSelectedHistory={setLocation}
        refetch={refetch}
        allCountry={allCountry}
      />
    </>
  );
};

export default WeatherPage;
