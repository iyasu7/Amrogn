<script setup>
import JumbotronOld from './components/JumbotronOld.vue'; 
import Jumbotron from './components/Jumbotron.vue'; 
import Carousel from './components/Carousel.vue';
import Menu from './components/Menu/Menu.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div>
    <Navbar />
    <!-- <JumbotronOld /> -->
    <Jumbotron />
    <Carousel />
    <Menu></Menu>
  </div>
</template>

