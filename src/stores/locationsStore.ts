import { ref } from "vue";
import { defineStore } from "pinia";
import type { TLocation } from "@/types/TLocation";

export const useLocationsStore = defineStore("locationsStore", () => {
  const locations = ref<TLocation[]>([]);

  function setLocationsToStorage() {
    localStorage.setItem("locations", JSON.stringify(locations.value));
  }

  function setDefault() {
    locations.value = [
      {
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
  }
  function addLocation(location: TLocation) {
    const isLocationAlreadyIn = locations.value.filter((loc) => {
      return location.lon === loc.lon && location.lat === loc.lat;
    }).length;
    const isLocationsEmpty = !locations.value.length;
    if (isLocationsEmpty && isLocationAlreadyIn) return;
    locations.value.push(location);
    setLocationsToStorage();
  }
  function deleteLocation(location: TLocation) {
    locations.value = locations.value.filter((loc) => {
      return location.lon !== loc.lon && location.lat !== loc.lat;
    });
    setLocationsToStorage();
  }

  return { locations, setDefault, setLocations, addLocation, deleteLocation };
});
