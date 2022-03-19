import axios from "axios";
import { config } from "constants/config";

const { openWeatherUrl, openWeatherApiKey } = config;

export const getWeatherById = (id) => {
  const url = `${openWeatherUrl}/data/2.5/weather?id=${id}&appid=${openWeatherApiKey}`;
  return axios.get(url);
};
