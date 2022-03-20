import * as React from "react";
import { useGetWeatherById } from "queries/weatherQueries";
import { useHistory } from "providers/HistoryProvider";

// custom hook to query data and update history store
export const useQueryWeather = (location) => {
  const { setHistory, values } = useHistory();
  const [weatherData, setWeatherData] = React.useState(() => undefined);

  // only enable manual refetch to get latest weather data by weather ID
  const { data, refetch, isError, error, isLoading } = useGetWeatherById(
    location.id,
    {
      enabled: false, // turned off by default due to manual refetch is needed
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  React.useEffect(() => {
    if (data) setWeatherData(data);
  }, [data]);

  React.useEffect(() => {
    const dateNow = Date.now();

    // avoid bulk create history
    // limit create history in less or qual 500 ms
    const latestSearchAt = values[values.length - 1]?.searchAt || 0;
    const isAllowCreateHistory = Boolean(dateNow - latestSearchAt > 500);

    // update history store
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

  return { data, refetch, isError, error, isLoading };
};
