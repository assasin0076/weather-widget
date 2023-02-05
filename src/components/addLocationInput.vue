<script setup lang="ts">
import { computed, ref } from "vue";
import { useLocationsStore } from "@/stores/locationsStore";
import getPlaces from "@/api/getPlaces";
import type { TPlace } from "@/types/TPlace";
import type { TLocation } from "@/types/TLocation";

const places = ref<TPlace[]>([]);

const computedPlaces = computed(() => {
  return places.value;
});
const locationsStore = useLocationsStore();

function selectHandle(option: TPlace) {
  const location: TLocation = {
    name: option.city,
    lat: option.latitude,
    lon: option.longitude,
    state: option.region,
    country: option.countryCode,
  };
  locationsStore.addLocation(location);
}
let timeout: ReturnType<typeof setTimeout>;

async function searchHandle(search: any, loading: any) {
  loading(true);
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    places.value = await getPlaces(search);
    loading(false);
  }, 300);
}
</script>

<template>
  <v-select
    @search="searchHandle"
    @option:selected="selectHandle"
    :options="computedPlaces"
    :resetOnOptionsChange="true"
    :filterable="false"
  >
    <template #open-indicator="{ attributes }">
      <span v-bind="attributes"></span>
    </template>
  </v-select>
</template>
