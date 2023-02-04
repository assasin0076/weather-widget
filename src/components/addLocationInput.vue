<script setup lang="ts">
import { computed, ref } from "vue";
import { useLocationsStore } from "@/stores/locationsStore";
import getPlaces from "@/api/getPlaces";
import type { TPlace } from "@/types/TPlace";
import type { TLocation } from "@/types/TLocation";

const places = ref<TPlace[]>([]);
const locationsStore = useLocationsStore();

const searchValue = computed({
  get: () => "",
  set: (e: TPlace | string) => {
    if (typeof e === "string") return;
    const location: TLocation = {
      name: e.city,
      lat: e.latitude,
      lon: e.longitude,
      state: e.region,
      country: e.countryCode,
    };
    locationsStore.addLocation(location);
  },
});
let timeout: ReturnType<typeof setTimeout>;

function inputHandle(e: any) {
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    places.value = await getPlaces(e?.target?.value);
  });
}
</script>

<template>
  <v-select v-model="searchValue" @input="inputHandle" :options="places" />
</template>
