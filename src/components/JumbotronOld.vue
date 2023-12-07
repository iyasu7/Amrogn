<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div
    class="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% overflow-hidden bg-cover bg-no-repeat p-0 text-center"
    style="
      background-color: #312a2a;
      background-image: url('src/assets/Ads-Fried-Chicken-removebg-ratio.png');
      height: 100vh;
    "
  >
    <Navbar class="z-40" />
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0)"
    >
      <div class="flex h-full ml-24 items-center justify-start">
        <div>
          <section class="py-8">
            <div class="container mx-auto">
              <h2 class="text-4xl font-bold">Welcome to Amrogn</h2>
              <h1 class="text-lg font-bold mt-4">
                The Best Shewarma in Addis Ababa
              </h1>
              <button
                class="btn btn-primary1 my-12 bg-red-700 p-3 rounded rounded-4"
              >
                Learn More
              </button>
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
  background: linear-gradient(to bottom, #0d0e10, #303538);
  height: 100vh; /* Set the height as needed */
}
</style>
