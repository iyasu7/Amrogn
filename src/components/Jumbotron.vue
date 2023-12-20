<template>
  <article
    id="hero-screen"
    style="
      background-color: #240101;
      background-position: right 600px bottom 10px;
    "
    class="relative w-full left-1/2 transform -translate-x-1/2 flex flex-shrink-0 overflow-hidden shadow-2xl"
  >
    <div
      class="rounded-full z-50 w-full p-2 text-white absolute top-0 left-0 text-sm px-2 text-center"
    >
      <Navbar ref="navbar" :navbarActive="navbarBlue" class="fixed" />
      <!-- <span>{{ currentIndex }}</span
      >/
      <span>{{ itemList.length }}</span> -->
    </div>

    <template v-for="(item, index) in itemList" :key="index">
      <figure
        style="height: 100vh"
        class="h-96"
        v-show="currentIndex === index + 1"
        transition="opacity"
      >
        <img
          :src="item.link"
          :alt="item.title"
          class="absolute inset-0 z-10 w-full h-full right-0 top-0 object-cover bg-opacity-25 opacity-90"
        />
        <figcaption
          class="absolute m-12 px-24 py-12 rounded-3xl left-0 top-1/2 transform -translate-y-1/2 z-20 w-96 ml-16 font-light text-center tracking-widest leading-snug text-white "
        >
          <!-- <pre class="text-white bg-orange-400">  {{ navbarBlue }}</pre> -->
          <h2 class="text-6xl font-bold mb-6">{{ item.title }}</h2>
          <p class="text-xl">{{ item.description }}</p>
        </figcaption>
      </figure>
    </template>
    <div class="block w-full">
      <button
        @click="back"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 hover:bg-gray-700"
      >
        <svg
          class="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        @click="next"
        class="absolute right-4 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 hover:bg-gray-700"
      >
        <svg
          class="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Navbar from "./Navbar.vue";

const currentIndex = ref(1);
const navbarBlue = ref(false);
const navbar = ref(false);
const heroScreen = ref(null);
const view = ref(true);
// const navbarActive = defineProps({
//     navbarActive: Boolean
//   })
const images = [
  "https://source.unsplash.com/1600x900/?beach",
  "https://source.unsplash.com/1600x900/?cat",
  "https://source.unsplash.com/1600x900/?dog",
  "https://source.unsplash.com/1600x900/?lego",
  "https://source.unsplash.com/1600x900/?textures&patterns",
];
const itemList = [
  {
    link: "src/assets/base-bg-overlay.jpg",
    title: "Fried Chicken",
    description:
      "A mouth-watering dish made with tender and juicy chicken.",
  },
  {
    link: "src/assets/base-bg-overlay (1).jpg",
    title: "Shawarma",
    description: "A classic dish made with tender and juicy chicken.",
  },
  
  {
    link: "src/assets/base-bg-overlay (2).jpg",
    title: "Grilled Chicken",
    description: "A classic dish made with tender and juicy chicken.",
  },
  {
    link: "src/assets/base-bg-overlay (3).jpg",
    title: "Mofo",
    description:
      "Mofo is a classic dish made with tender and juicy chicken.",
  },
  {
    link: "src/assets/base-bg-overlay (4).jpg",
    title: "Roasted Chicken",
    description:
      "Roasted is a classic dish made with tender and juicy chicken.",
  },
];
const back = () => {
  if (currentIndex.value > 1) {
    currentIndex.value = currentIndex.value - 1;
  }
};
const next = () => {
  if (currentIndex.value < itemList.length) {
    currentIndex.value = currentIndex.value + 1;
  } else {
    currentIndex.value = 1;
  }
};
const startAutoSlide = () => {
  setInterval(() => {
    next();
  }, 5000);
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const handleScroll = () => {
  if (window.scrollY > 0) {
    if (topOfPage) topOfPage = false;
  } else {
    if (!topOfPage) topOfPage = true;
  }
};
onMounted(() => {
  startAutoSlide();
  // window.addEventListener("scroll", scrollHandler);
});
onBeforeUnmount(() => {
  window.addEventListener("scroll", handleScroll);
  
})
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", scrollHandler);
  });
const scrollHandler = () => {
  var nav = document.getElementById("navbar");
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
};
</script>
