<script setup>
import MenuItem from "../menu/MenuItem.vue";

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
</script>
<template>
  <section class="food_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Our Menu</h2>
      </div>

      <ul class="filters_menu">
        <li class="active" data-filter="*">All</li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>

      <div class="filters-content mx-12">
        <div class="row grid ">
          <div class="ml-12 sm:ml-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3  gap-4 grid-flow-row">
            <MenuItem
            class="m-2"
              v-for="(item, index) in menuItems"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
