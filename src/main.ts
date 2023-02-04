import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSelect from "vue-select";
import vueCustomElement from "vue-custom-element";

import App from "./App.vue";

import "@fontsource/roboto";
import "./assets/main.scss";
import "vue-select/dist/vue-select.css";

const app = createApp(App);

app.use(vueCustomElement);

app.component("v-select", VueSelect);
app.use(createPinia());

app.mount("#app");
