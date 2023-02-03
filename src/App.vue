<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useLocationsStore } from "@/stores/locationsStore";
import getWeatherData from "@/api/getWeatherData";
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import type { TWeather } from "@/types/TWeather";

const locationsStore = useLocationsStore();

function setBaseLocations() {
  const localStorageLocations = localStorage.getItem("locations");
  if (!localStorageLocations) return locationsStore.setDefault();
  locationsStore.setLocations(JSON.parse(localStorageLocations));
}
function displayVisibility(visibility: number) {
  if (String(visibility).length < 3) return `Visibility: ${visibility}m`;
  return `Visibility: ${(visibility / 1000).toFixed(1)}km`;
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
      <div v-for="item in weatherData" :key="item.id">
        <div>{{ item.name }}, {{ item.sys.country }}</div>
        <div>
          <img
            :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
          />
          <div>{{ Math.trunc(item.main.temp) }}°C</div>
        </div>
        <div>
          Feels like {{ item.main.feels_like }}°C.
          {{ capitalizeFirstLetter(item.weather[0].description) }}. No data.
        </div>
        <div>
          <div>{{ item.wind.speed.toFixed(1) }}m/s SSE</div>
          <div>{{ item.wind.deg }}hPa</div>
        </div>
        <div>
          <div>Humidity: {{ item.main.humidity }}%</div>
          <div>{{ displayVisibility(item.visibility) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
