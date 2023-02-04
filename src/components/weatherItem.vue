<script setup lang="ts">
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import type { TWeather } from "@/types/TWeather";
import type { PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<TWeather>,
    required: true,
  },
});

function displayVisibility(visibility: number) {
  if (String(visibility).length < 3) return `Visibility: ${visibility}m`;
  return `Visibility: ${(visibility / 1000).toFixed(1)}km`;
}
</script>

<template>
  <div>
    <div>{{ item.name }}, {{ item.sys.country }}</div>
    <div>
      <img
        :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
        alt="#"
      />
      <div>{{ Math.trunc(item.main.temp) }}°C</div>
    </div>
    <div>
      Feels like {{ item.main.feels_like }}°C.
      {{ capitalizeFirstLetter(item.weather[0].description) }}.
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
</template>
