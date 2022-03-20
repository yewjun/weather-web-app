export const IDefaultSearchCountryResponse = {
  id: 0,
  name: "",
  state: "",
  country: "",
  coord: {
    lon: 0,
    lat: 0,
  },
};

export const IDefaultLocation = {
  id: 0,
  name: "",
  country: "",
};

export const MockData = {
  coord: { lon: 101.0829, lat: 4.5841 },
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
  ],
  base: "stations",
  main: {
    temp: 303.25,
    feels_like: 310.25,
    temp_min: 303.25,
    temp_max: 303.25,
    pressure: 1004,
    humidity: 78,
    sea_level: 1004,
    grnd_level: 999,
  },
  visibility: 10000,
  wind: { speed: 1, deg: 224, gust: 2.2 },
  clouds: { all: 75 },
  dt: 1647684896,
  sys: { country: "MY", sunrise: 1647645628, sunset: 1647689201 },
  timezone: 28800,
  id: 1734634,
  name: "Ipoh",
  cod: 200,
};
