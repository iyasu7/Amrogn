<script setup>
import MenuItem from "../menu/MenuItem.vue";
import { ref } from "vue";

defineProps({
  items: Array,
});
const emit = defineEmits(["click"]);
const filter = ref("*");
emit("click", filter);
</script>
<template>
  <section id="menu" class="food_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Our Menu</h2>
      </div>

      <ul class="filters_menu">
        <li class="active" data-filter="*">All</li>
        <li @click="filter = 'burger'">Burger</li>
        <li @click="filter = 'pizza'">Pizza</li>
        <li @click="filter = 'pasta'">Pasta</li>
        <li @click="filter = 'fries'">Fries</li>
      </ul>

      <div class="filters-content mx-12">
        <div class="row grid">
          <div
            class="mx-2 sm:mx-2 lg:ml-12 lg:mr-0 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 grid-flow-row"
          >
            <MenuItem
              class="m-2"
              v-for="(item, index) in items"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
