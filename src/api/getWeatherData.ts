import api from "@/api/api";
import { useLocationsStore } from "@/stores/locationsStore";
import type { TWeather } from "@/types/TWeather";

export default async () => {
  const locationsStore = useLocationsStore();
  const weatherResponses = await Promise.all(
    locationsStore.locations.map((location) => {
      const lat = Number(location.lat.toFixed(2));
      const lon = Number(location.lon.toFixed(2));
      return api.get("/data/2.5/weather", {
        params: { lat, lon, units: "metric" },
      });
    })
  );
  const weatherData: TWeather[] = weatherResponses.map(
    (response) => response.data
  );
  locationsStore.setWeatherData(weatherData);
};
