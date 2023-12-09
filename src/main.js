import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import Vue3Geolocation from "vue3-geolocation";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Vue3Geolocation);
app.mount("#app");
