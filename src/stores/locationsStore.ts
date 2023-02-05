import { ref } from "vue";
import { defineStore } from "pinia";
import type { TLocation } from "@/types/TLocation";
import type { TWeather } from "@/types/TWeather";
import { nanoid } from "nanoid";
import getWeatherData from "@/api/getWeatherData";

export const useLocationsStore = defineStore("locationsStore", () => {
  const locations = ref<TLocation[]>([]);

  const weatherData = ref<TWeather[]>([]);

  function setWeatherData(data: TWeather[]) {
    weatherData.value = data;
  }

  function setLocationsToStorage() {
    localStorage.setItem("locations", JSON.stringify(locations.value));
  }
  function isLocationsEqual(loc1: TLocation, loc2: TLocation) {
    return (
      loc1.lon.toFixed(2) == loc2.lon.toFixed(2) &&
      loc1.lat.toFixed(2) == loc2.lat.toFixed(2)
    );
  }

  function setDefault() {
    locations.value = [
      {
        id: nanoid(),
        name: "London",
        lat: 51.5073219,
        lon: -0.1276474,
        country: "GB",
        state: "England",
      },
    ];
    setLocationsToStorage();
  }
  function setLocations(incomingLocations: TLocation[]) {
    locations.value = incomingLocations;
    setLocationsToStorage();
    getWeatherData();
  }
  function addLocation(location: TLocation) {
    const isLocationAlreadyIn = locations.value.filter((loc) => {
      return isLocationsEqual(location, loc);
    }).length;
    if (isLocationAlreadyIn) return;
    locations.value.push({ id: nanoid(), ...location });
    setLocationsToStorage();
    getWeatherData();
  }
  function deleteLocation(location: TLocation) {
    locations.value = locations.value.filter((loc) => {
      return location.id !== loc.id;
    });
    setLocationsToStorage();
    getWeatherData();
  }

  return {
    locations,
    weatherData,
    setWeatherData,
    setDefault,
    setLocations,
    addLocation,
    deleteLocation,
    setLocationsToStorage,
  };
});
