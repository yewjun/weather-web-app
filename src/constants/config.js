export const config = {
  isDevEnvironment: process.env.REACT_APP_STAGE === "dev",
  environment: process.env.REACT_APP_STAGE,
  openWeatherUrl: process.env.REACT_APP_OPEN_WEATHER_BASE_URL,
  openWeatherApiKey: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
};
