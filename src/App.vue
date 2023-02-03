<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useLocationsStore } from "@/stores/locationsStore";
import getWeatherData from "@/api/getWeatherData";
import type { TWeather } from "@/types/TWeather";

const locationsStore = useLocationsStore();

function setBaseLocations() {
  const localStorageLocations = localStorage.getItem("locations");
  if (!localStorageLocations) return locationsStore.setDefault();
  locationsStore.setLocations(JSON.parse(localStorageLocations));
}

const weatherData = ref<TWeather[]>([]);

onMounted(async () => {
  setBaseLocations();
  weatherData.value = await getWeatherData();
});
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white h-[400px] w-[400px]">ку</div>
  </div>
</template>
