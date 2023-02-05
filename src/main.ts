import { createApp } from "vue";
import App from "./App.vue";
import { register } from "./weather-widget.js";

const app = createApp(App);

register();
app.mount("#app");
