import { createApp } from "vue";
import vueCustomElement from "vue-custom-element";
import useWeatherWidget from "./weatherWidget.js";
import App from "./App.vue";
useWeatherWidget();

const app = createApp(App);

app.use(vueCustomElement);

app.mount("#app");
