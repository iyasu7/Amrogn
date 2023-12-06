<script lang="ts" setup>

import Navbar from '../components/Navbar.vue'; 
</script>

<template>
  <div
    class="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% overflow-hidden bg-cover bg-no-repeat p-0 text-center"
    style="
      background-image: url('src/assets/Ads-Fried-Chicken-removebg-ratio.png');
      height: 100vh;
    "
  >
  <Navbar />
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.6)"
    >
      <div class="flex h-full items-center justify-center">
  <div>
    <header class="bg-primary1 text-white py-4">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl">Amrogn</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:text-primary1">Home</a></li>
            <li><a href="#" class="text-white hover:text-primary1">About</a></li>
            <li><a href="#" class="text-white hover:text-primary1">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="py-8">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold">Welcome to Amrogn</h2>
        <p class="text-lg">This is a sample paragraph.</p>
        <a href="#" class="btn btn-primary1">Learn More</a>
      </div>
    </section>

    <!-- Rest of the HTML structure goes here -->
  </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #0D0E10, #303538);
  height: 100vh; /* Set the height as needed */
}
</style>