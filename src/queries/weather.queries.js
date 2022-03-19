import { useQuery } from "react-query";
import { getWeatherById } from "../services/weather.service";
import { useCustomHistoryState } from "../pages/TodayWeather/hooks/useCustomHistory";

export const useGetWeatherById = (id, options) => {
  return useQuery(["getWeather", id], () => getWeatherById(id), options);
};
