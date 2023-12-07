import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Geolocation from 'vue3-geolocation';
createApp(App)
.use(Vue3Geolocation)
.mount('#app');
