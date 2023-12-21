<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div
    class="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% overflow-hidden bg-cover bg-no-repeat p-0 text-center"
    style="
      background-color: #312a2a;
      background-image: url('https://images.unsplash.com/photo-1681073302782-10f85371deb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHJlc3R1cmFudHxlbnwwfDB8MHx8fDA%3D');
      height: 100vh;
    "
  >
    <Navbar class="z-40" />
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0)"
    >
      <div class="flex h-full ml-24 items-center justify-center">
        <div>
          <section class="py-8">
            <div class="container mx-auto text-center">
              <div
                class="absolute  rounded-xl p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
              >
                <h2 class="text-7xl font-extrabold leading-tight mb-4 text-[#FC1E11]">
                  Welcome to <span class="text-[#FA1E11]">Amrogn</span>
                </h2>
                <p class="text-xl font-bold mb-8 text-yellow-500">
                  Indulge in the Best Shewarma Experience in Addis Ababa
                </p>
                <a
                  href="#"
                  class="glow-btn text-gray-100 py-2 px-6 rounded-full font-bold text-lg hover:bg-yellow-500 transition duration-300 ease-in-out"
                  >Learn More</a
                >
              </div>
              <!-- <button
                class="btn btn-primary1 my-12 bg-red-700 p-3 rounded rounded-4 glow-btn"
              >
                Learn More
              </button> -->
            </div>
          </section>

          <!-- Rest of the HTML structure goes here -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes glowing {
  0% {
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
  }
}

.glow-btn {
  background-color: #FC1E11;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  animation: glowing 1.5s infinite;
}

.gradient-bg {
  background: linear-gradient(to bottom, #0d0e10, #303538);
  height: 100vh; /* Set the height as needed */
}
</style>
