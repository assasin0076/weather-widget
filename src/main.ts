import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import VueSelect from "vue-select";

import App from "./App.vue";

import "./assets/main.scss";
import "vue-select/dist/vue-select.css";

const app = createApp(App).component("v-select", VueSelect);

app.use(createPinia());
app.use(autoAnimatePlugin);

app.mount("#app");
