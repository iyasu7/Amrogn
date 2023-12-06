<script setup>
import MenuItem from "./MenuItem.vue";

const menuItems = [
  {
    category: "pizza",
    name: "Delicious Pizza",
    price: "$20",
    image: "images/f1.png",
  },
  {
    category: "burger",
    name: "Delicious Burger",
    price: "$15",
    image: "https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE",
  },
  {
    category: "pizza",
    name: "Delicious Pizza",
    price: "$17",
    image: "images/f3.png",
  },
  {
    category: "pasta",
    name: "Delicious Pasta",
    price: "$18",
    image: "images/f4.png",
  },
  {
    category: "fries",
    name: "French Fries",
    price: "$10",
    image: "images/f5.png",
  },
  {
    category: "pizza",
    name: "Delicious Pizza",
    price: "$15",
    image: "images/f6.png",
  },
  {
    category: "burger",
    name: "Tasty Burger",
    price: "$12",
    image: "images/f7.png",
  },
  {
    category: "burger",
    name: "Tasty Burger",
    price: "$14",
    image: "images/f8.png",
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
          <!-- Replace the data with your actual data -->
          <div class="ml-12 grid grid-cols-3 gap-4 grid-flow-row">
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
