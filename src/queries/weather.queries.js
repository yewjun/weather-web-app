import { useQuery } from "react-query";
import { getWeatherById } from "../services/weather.service";
import { queryClient } from "./";

export const GetWeatherQueryKey = "getWeather";

export const useGetWeatherById = (id, options) => {
  return useQuery([GetWeatherQueryKey, id], () => getWeatherById(id), options);
};

export const useQueryWeatherById = (id) =>
  queryClient.getQueryData([GetWeatherQueryKey, id]);
