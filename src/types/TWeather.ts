export type TWeather = {
  id: number;
  name: string;
  coords: {
    lat: number;
    lon: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  sys: {
    country: string;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
};
