// configure all environment values
export const config = {
  isDevEnvironment: process.env.REACT_APP_STAGE === "dev",
  environment: process.env.REACT_APP_STAGE,
  openWeatherBaseUrl: process.env.REACT_APP_OPEN_WEATHER_BASE_URL,
  openWeatherBasePath: "/data/2.5/",
  openWeatherApiKey: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  openWeatherImageUrl: process.env.REACT_APP_OPEN_WEATHER_IMAGE_URL,
  openWeatherImagePath: "/img/wn/",
};
