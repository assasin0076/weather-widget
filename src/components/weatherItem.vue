<script setup lang="ts">
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import type { TWeather } from "@/types/TWeather";
import type { PropType } from "vue";
import { labelStyle, textStyle } from "@/styles/styles";

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
  <div class="mb-12">
    <div :class="labelStyle" class="mb-2">
      {{ item.name }}, {{ item.sys.country }}
    </div>
    <div class="w-full flex items-center mb-3">
      <img
        class=""
        :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
        alt="#"
      />
      <div class="text-gray-800 text-3xl font-black">
        {{ Math.trunc(item.main.temp) }}°C
      </div>
    </div>
    <div :class="textStyle" class="mb-3">
      Feels like {{ item.main.feels_like }}°C.
      {{ capitalizeFirstLetter(item.weather[0].description) }}.
    </div>
    <div :class="textStyle" class="flex items-center mb-3">
      <svg
        class="w-5 h-5 mr-2 text-gray-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.243,11.97l12-3A1,1,0,0,0,21,8V5a1,1,0,0,0-.835-.986l-12-2A1,1,0,0,0,7,3v8A1,1,0,0,0,8.243,11.97ZM17,5.514l2,.333V7.219l-2,.5Zm-4-.667,1,.167,1,.167V8.219l-2,.5ZM9,4.181l2,.333v4.7l-2,.5ZM3,22V2A1,1,0,0,1,5,2V22a1,1,0,0,1-2,0Z"
        />
      </svg>
      {{ item.wind.speed.toFixed(1) }}m/s SSE
      <svg
        class="w-5 h-5 mr-2 ml-4 text-gray-600"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z"
          fill="currentColor"
        />
        <path
          d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z"
          fill="currentColor"
        />
        <path
          d="M9.31 9.75109H2C1.59 9.75109 1.25 9.41109 1.25 9.00109C1.25 8.59109 1.59 8.25109 2 8.25109H9.31C10.38 8.25109 11.25 7.38109 11.25 6.31109C11.25 5.24109 10.38 4.37109 9.31 4.37109C8.24 4.37109 7.37 5.24109 7.37 6.31109V6.69109C7.37 7.10109 7.03 7.44109 6.62 7.44109C6.21 7.44109 5.87 7.11109 5.87 6.69109V6.31109C5.87 4.41109 7.41 2.87109 9.31 2.87109C11.21 2.87109 12.75 4.41109 12.75 6.31109C12.75 8.21109 11.21 9.75109 9.31 9.75109Z"
          fill="currentColor"
        />
      </svg>
      {{ item.wind.deg }}hPa
    </div>
    <div class="flex justify-between">
      <div :class="textStyle">Humidity: {{ item.main.humidity }}%</div>
      <div :class="textStyle">{{ displayVisibility(item.visibility) }}</div>
    </div>
  </div>
</template>
