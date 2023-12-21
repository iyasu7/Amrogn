<script setup>
import MenuItem from "../menu/MenuItem.vue";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../store"

const store = useMainStore();

const tagInput = ref('');
const menuItems = storeToRefs(store).menuItems;

const filteredTags = ref([...menuItems.value]);
console.log('filteredTags', filteredTags);

onMounted(() => {
  filteredTags.value = [...menuItems.value];
  console.log(filteredTags.value);
});

const filter = (tag) => {
  tagInput.value = tag;
  const copyOfMenu = menuItems.value.map(item => {
    return {
      ...item,
    }
  });
  const selectedTag = tagInput.value.toLowerCase();
  filteredTags.value = copyOfMenu.filter(item =>
    item.tags.map(tag => tag.toLowerCase()).includes(selectedTag)
  );
  console.log('filter', filteredTags.value);
}

function clearFilters() {
  tagInput.value = '';
  filteredTags.value = [...menuItems.value];
}
</script>


<template>
  <section id="menu" class="food_section layout_padding dark:text-white">
    <div class="container">
      <div class="heading_container heading_center dark:text-white">
        <h2>Our Menu</h2>
      </div>

      <ul class="filters_menu">
        <li  @click="clearFilters" :class="{ 'active': tagInput === '' }">All</li>
        <li @click="filter('chicken')" :class="{ 'active': tagInput === 'chicken' }">Chicken</li>
        <li @click="filter('shewarma')" :="{ 'active': tagInput === 'shewarma' }">Shewarma</li>
        <li @click="filter('rice')" :class="{ 'active': tagInput === 'rice' }">Rice</li>
        <li @click="filter('meat')" :class="{ 'active': tagInput === 'meat' }">Meat</li>
      </ul>

      <div class="md:ml-24 sm:mr-24 ml-9 mr-3 md:mr-0">
        <div class="row grid">
          <div
            class="mx-2 sm:mx-2 lg:ml-12  lg:mr-0 gap-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid-flow-row"
          >
            <MenuItem
              class="m-2"
              v-for="(item, index) in filteredTags"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
