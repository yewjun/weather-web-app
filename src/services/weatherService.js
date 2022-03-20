import axios from "axios";
import { weatherServiceName } from "./";
import { config } from "constants/config";

const { openWeatherBaseUrl, openWeatherBasePath, openWeatherApiKey } = config;

// fetch data from OpenWeather endpoint using Axios
export const getWeatherById = (id) => {
  const url = `${openWeatherBaseUrl}${openWeatherBasePath}${weatherServiceName}?id=${id}&appid=${openWeatherApiKey}`;
  return axios.get(url);
};
