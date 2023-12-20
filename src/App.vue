<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useMainStore } from './store';
import { storeToRefs } from "pinia";

import News from './components/News.vue'; 
import Jumbotron from './components/Jumbotron.vue'; 
import Carousel from './components/Carousel.vue';
import Menu from './components/menu/Menu.vue';
import Navbar from './components/Navbar.vue';
import WeAre from './components/about/WeAre.vue';
import Testimonial3 from './components/Testimonial3.vue';
import GoogleMap from './components/location/GoogleMap.vue';
import FooterInfo from './components/FooterInfo.vue';
import Offers from './components/Offers.vue';

const store = useMainStore();
const { openNews } = storeToRefs(store);
const open = ref(openNews);
</script>

<template>
  <div>
    <News v-if="open" />
    <!-- <Navbar /> -->
    <!-- <JumbotronOld /> -->
    <Jumbotron />
    <Carousel />
    <WeAre />
    <!-- <Offers /> -->
    <Menu />
    <Testimonial3 />
    <GoogleMap />
    <FooterInfo />
  </div>
</template>

