import { createApp, defineCustomElement, getCurrentInstance, h } from "vue";
import { createPinia } from "pinia";
import appStyles from "@/assets/main.scss";
import WeatherWidget from "@/components/WeatherWidget.ce.vue";
import VueSelect from "vue-select";

export const VueWeatherWidget = defineCustomElement({
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

export function register() {
  customElements.define("weather-widget", VueWeatherWidget);
}

register();
