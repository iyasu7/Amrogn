<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import JumbotronOld from './components/JumbotronOld.vue'; 
import Jumbotron from './components/Jumbotron.vue'; 
import Carousel from './components/Carousel.vue';
import Menu from './components/menu/Menu.vue';
import Navbar from './components/Navbar.vue';
import WeAre from './components/about/WeAre.vue';
import Testemonial from './components/Testimonial.vue';
import GoogleMap from './components/location/GoogleMap.vue';
import FooterInfo from './components/FooterInfo.vue';
import Offers from './components/Offers.vue';

const filteredMenuByCatagory = (catagory) => {
  return menuItems.filter((item) => {
    return item.category === catagory
  })
}
defineProps({
  item: Object,
})
</script>

<template>
  <div>
    <!-- <Navbar /> -->
    <!-- <JumbotronOld /> -->
    <Jumbotron />
    <Carousel />
    <Offers />
    <Menu />
    <WeAre />
    <Testemonial />
    <GoogleMap />
    <FooterInfo />
  </div>
</template>

