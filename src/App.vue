<script setup lang="ts">
import { onMounted } from "vue";
import { useLocationsStore } from "@/stores/locationsStore";

const locationsStore = useLocationsStore();

function setBaseLocations() {
  const localStorageLocations = localStorage.getItem("locations");
  if (!localStorageLocations) return;
  locationsStore.setLocations(JSON.parse(localStorageLocations));
}

onMounted(() => {
  setBaseLocations();
});
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white h-[400px] w-[400px]">ку</div>
  </div>
</template>
