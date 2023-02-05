import { createApp, defineCustomElement, getCurrentInstance, h } from "vue";
import { createPinia } from "pinia";
import VueSelect from "vue-select";
import appStyles from "@/assets/main.css";
import WeatherWidget from "@/WeatherWidget.ce.vue";

export function createElementInstance() {
  return defineCustomElement({
    setup() {
      const app = createApp();
      const pinia = createPinia();
      app.use(pinia);
      app.component("v-select", VueSelect);

      const inst = getCurrentInstance();
      Object.assign(inst.appContext, app._context);
      Object.assign(inst.provides, app._context.provides);
    },
    styles: [appStyles],
    render: () => h(WeatherWidget),
  });
}

export default function useWeatherWidget() {
  customElements.define("weather-widget", createElementInstance());
}
