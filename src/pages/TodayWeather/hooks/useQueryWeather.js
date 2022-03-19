import * as React from "react";
import { useGetWeatherById } from "../../../queries/weather.queries";
import { useHistory } from "../providers/HistoryProvider";

export const useQueryWeather = (location) => {
  const customHistoryState = useHistory();

  const { data, refetch } = useGetWeatherById(location.id, {
    enabled: false || Boolean(location.id), // turned off by default due to manual refetch is needed
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (data)
      customHistoryState.setHistory({
        id: location.id,
        country: location.country,
        city: location.city,
        searchAt: Date.now(),
      });
  }, [data, location]);

  return { data, refetch };
};
