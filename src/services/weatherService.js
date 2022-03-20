import axios from "axios";
import { weatherServiceName } from "./";
import { config } from "constants/config";

const { openWeatherBaseUrl, openWeatherBasePath, openWeatherApiKey } = config;

export const getWeatherById = (id) => {
  const url = `${openWeatherBaseUrl}${openWeatherBasePath}${weatherServiceName}?id=${id}&appid=${openWeatherApiKey}`;
  return axios.get(url);
};
