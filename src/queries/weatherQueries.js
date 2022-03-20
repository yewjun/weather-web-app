import { useQuery } from "react-query";
import { getWeatherById } from "services/weatherService";
import { queryClient } from ".";

export const GetWeatherQueryKey = "getWeather";

// using useQuery to handle refetch request
export const useGetWeatherById = (id, options) => {
  return useQuery([GetWeatherQueryKey, id], () => getWeatherById(id), options);
};

// using getQueryData to get existing query cached data
export const useQueryWeatherById = (id) =>
  queryClient.getQueryData([GetWeatherQueryKey, id]);
