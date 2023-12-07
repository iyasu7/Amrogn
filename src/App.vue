<script setup>
import JumbotronOld from './components/JumbotronOld.vue'; 
import Jumbotron from './components/Jumbotron.vue'; 
import Carousel from './components/Carousel.vue';
import Menu from './components/menu/Menu.vue';
import Navbar from './components/Navbar.vue';
import WeAre from './components/about/WeAre.vue';
// import Testemonial from './components/Testemonial.vue';
import GoogleMap from './components/location/GoogleMap.vue';
import FooterInfo from './components/FooterInfo.vue';
import Offers from './components/Offers.vue';

</script>

<template>
  <div>
    <Navbar />
    <!-- <JumbotronOld /> -->
    <Jumbotron />
    <Carousel />
    <Offers />
    <Menu></Menu>
    <WeAre />
    <Testemonial />
    <GoogleMap />
    <FooterInfo />
  </div>
</template>

