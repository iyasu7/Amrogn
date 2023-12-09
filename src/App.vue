<script setup>
import { ref, defineProps, defineEmits } from 'vue';
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
const menuItems = [
  {
    category: "pizza",
    name: "Delicious Pizza",
    price: "$20",
    image: "src/assets/Ads-Fried-Chicken.jpg",
  },
  {
    category: "burger",
    name: "Delicious Burger",
    price: "$15",
    image: "src/assets/Ads-Fried-Chicken-removebg-menu.png",
  },
  {
    category: "pizza",
    name: "Delicious Pizza",
    price: "$17",
    image: "src/assets/Ads-Grilled-Chicken.jpg",
  },
  {
    category: "pasta",
    name: "Delicious Pasta",
    price: "$18",
    image: "src/assets/Ads-Mofo.jpg",
  },
  {
    category: "fries",
    name: "French Fries",
    price: "$10",
    image: "src/assets/Ads-Roasted.jpg",
  },
  {
    category: "pizza",
    name: "Delicious Pizza",
    price: "$15",
    image: "src/assets/Ads-Shawarma.jpg",
  },
  {
    category: "burger",
    name: "Tasty Burger",
    price: "$12",
    image: "src/assets/Ads-Shawarma.jpg",
  },
  {
    category: "burger",
    name: "Tasty Burger",
    price: "$14",
    image: "src/assets/Ads-Shawarma.jpg",
  },
];
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
    <Menu :items="menuItems" />
    <WeAre />
    <Testemonial />
    <GoogleMap />
    <FooterInfo />
  </div>
</template>

