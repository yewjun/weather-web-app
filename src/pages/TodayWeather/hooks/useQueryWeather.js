import * as React from "react";
import { useGetWeatherById } from "../../../queries/weatherQueries";
import { useHistory } from "../../../providers/HistoryProvider";

export const useQueryWeather = (location) => {
  const customHistoryState = useHistory();
  const [weatherData, setWeatherData] = React.useState(() => undefined);

  const { data, refetch, isFetching } = useGetWeatherById(location.id, {
    enabled: false, // turned off by default due to manual refetch is needed
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (data) setWeatherData(data);
  }, [data?.data, isFetching]); // trigger when refetching

  React.useEffect(() => {
    if (weatherData)
      customHistoryState.setHistory({
        id: location.id,
        country: location.country,
        city: location.city,
        searchAt: Date.now(),
      });
  }, [weatherData]);

  return { data, refetch };
};
