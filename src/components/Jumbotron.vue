<template>
  <article
    class="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl"
  >
    <div
      class="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10"
    >
      <span>{{ currentIndex }}</span
      >/
      <span>{{ itemList.length }}</span>
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
          class="absolute inset-0 z-10 h-view w-full object-cover opacity-70"
        />
        <figcaption
          class="absolute inset-x-0 top-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25"
        >
          <h2 class="text-2xl font-bold">{{ item.title }}</h2>
        </figcaption>
      </figure>
    </template>

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
  </article>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 1,
      images: [
        "https://source.unsplash.com/1600x900/?beach",
        "https://source.unsplash.com/1600x900/?cat",
        "https://source.unsplash.com/1600x900/?dog",
        "https://source.unsplash.com/1600x900/?lego",
        "https://source.unsplash.com/1600x900/?textures&patterns",
      ],
      itemList: [
        {
          link: "src/assets/Ads-Fried-Chicken-removebg-ratio.png",
          title: "Beautiful Beach",
          description:
            "A stunning view of a beach with golden sands and clear blue water.",
        },
        {
          link: "src/assets/Ads-Grilled-Chicken.jpg",
          title: "Adorable Cat",
          description: "An adorable cat with fluffy fur and captivating eyes.",
        },
        {
          link: "src/assets/Ads-Grilled-Chicken.jpg",
          title: "Playful Dog",
          description: "A playful dog enjoying a sunny day outdoors.",
        },
        {
          link: "src/assets/Ads-Mofo.jpg",
          title: "Colorful Lego",
          description:
            "A creative display of colorful Lego bricks and constructions.",
        },
        {
          link: "src/assets/Ads-Roasted.jpg",
          title: "Textures & Patterns",
          description:
            "An artistic composition showcasing various textures and patterns.",
        },
      ],
    };
  },
  methods: {
    back() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    next() {
      if (this.currentIndex < this.images.length) {
        this.currentIndex = this.currentIndex + 1;
      } else if (this.currentIndex <= this.images.length) {
        this.currentIndex = this.images.length - this.currentIndex + 1;
      }
    },
    startAutoSlide() {
      setInterval(() => {
        this.next();
      }, 5000);
    }
  },
  mounted() {
    this.startAutoSlide();
  }
};
</script>

<style scoped>
/* Add your styles for the component here */
</style>
