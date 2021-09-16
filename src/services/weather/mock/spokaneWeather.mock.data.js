const spokaneWeather = {
  coord: { lon: -117.3677, lat: 47.6166 },
  weather: [{ id: 711, main: "Smoke", description: "smoke", icon: "50d" }],
  base: "stations",
  main: {
    temp: 79.74,
    feels_like: 79.74,
    temp_min: 75.25,
    temp_max: 86.59,
    pressure: 1020,
    humidity: 27,
  },
  visibility: 10000,
  wind: { speed: 1.99, deg: 36, gust: 7 },
  clouds: { all: 1 },
  dt: 1631043387,
  sys: {
    type: 2,
    id: 2011907,
    country: "US",
    sunrise: 1631020601,
    sunset: 1631067505,
  },
  timezone: -25200,
  id: 5811704,
  name: "Spokane",
  cod: 200,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = spokaneWeather;
