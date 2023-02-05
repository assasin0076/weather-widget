import { createApp, defineCustomElement, getCurrentInstance, h } from "vue";
import { createPinia } from "pinia";
import appStyles from "@/assets/main.css";
import WeatherWidget from "@/WeatherWidget.ce.vue";

export const VueWeatherWidget = defineCustomElement({
  setup() {
    const app = createApp();
    const pinia = createPinia();
    app.use(pinia);

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
