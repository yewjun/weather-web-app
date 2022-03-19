import * as React from "react";
import { useGetWeatherById } from "queries/weatherQueries";
import { useHistory } from "providers/HistoryProvider";

export const useQueryWeather = (location) => {
  const { setHistory, values } = useHistory();
  const [weatherData, setWeatherData] = React.useState(() => undefined);

  const { data, refetch } = useGetWeatherById(location.id, {
    enabled: false, // turned off by default due to manual refetch is needed
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (data) setWeatherData(data);
  }, [data]); // trigger when refetching

  React.useEffect(() => {
    const dateNow = Date.now();

    const latestSearchAt = values[values.length - 1]?.searchAt || 0;
    const isAllowCreateHistory = Boolean(dateNow - latestSearchAt > 500); // avoid creating history in less or qual 500 ms

    if (weatherData && isAllowCreateHistory)
      setHistory({
        id: location.id,
        country: location.country,
        city: location.city,
        searchAt: dateNow,
      });

    // Ignore to avoid re-render with unnecessary dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherData, location]);

  return { data, refetch };
};
