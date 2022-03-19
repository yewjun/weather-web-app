import { useQuery } from "react-query";
import { getWeatherById } from "../services/weather.service";

export const useGetWeatherById = (id, options) => {
  return useQuery(["getWeather", id], () => getWeatherById(id), options);
};
