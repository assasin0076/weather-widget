import api from "@/api/api";
import { useLocationsStore } from "@/stores/locationsStore";

export default () => {
  const locationsStore = useLocationsStore();
  return Promise.all(
    locationsStore.locations.map((location) => {
      const lat = Number(location.lat.toFixed(2));
      const lon = Number(location.lon.toFixed(2));
      return api.get("/data/2.5/weather", { params: { lat, lon } });
    })
  );
};
