<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useLocationsStore } from "@/stores/locationsStore";
import getWeatherData from "@/api/getWeatherData";
import type { TWeather } from "@/types/TWeather";
import WeatherItem from "@/components/weatherItem.vue";
import AddLocationInput from "@/components/addLocationInput.vue";

const locationsStore = useLocationsStore();
const { deleteLocation } = locationsStore;

const currentView = ref<"weather" | "options">("options");
function switchToOptions() {
  currentView.value = "options";
}
function switchToWeather() {
  currentView.value = "weather";
}
function setBaseLocations() {
  const localStorageLocations = localStorage.getItem("locations");
  if (!localStorageLocations) return locationsStore.setDefault();
  locationsStore.setLocations(JSON.parse(localStorageLocations));
}
const weatherData = ref<TWeather[]>([]);

onMounted(async () => {
  setBaseLocations();
  weatherData.value = await getWeatherData();
  console.log(weatherData.value[0]);
});
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white h-[400px] w-[400px]">
      <template v-if="currentView === 'weather'">
        <button @click="switchToOptions">шестеренка</button>
        <weather-item v-for="item in weatherData" :key="item.id" :item="item" />
      </template>
      <template v-if="currentView === 'options'">
        <div>options<button @click="switchToWeather">Крестик</button></div>
        <div
          v-for="location in locationsStore.locations"
          :key="location.lon + location.lat"
        >
          <button>бург</button>
          {{ location.name }},
          {{ location.country }}
          <button @click="deleteLocation(location)">корз</button>
        </div>
        <div>Add location</div>
        <div><add-location-input /> <span>Ент</span></div>
      </template>
    </div>
  </div>
</template>
