<template>
  <section id="services" class="about_section layout_padding">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="col-md-6">
          <div class="img-box">
            <img
              src="../../assets/Ads-Fried-Chicken-removebg-ratio.png"
              alt="Amerogn"
            />
          </div>
        </div>
        <div class="col-md-6 sm:mx-8 mx-4">
          <div class="detail-box">
            <div class="heading_container">
              <h2 class="text-3xl font-bold">We Are Amrogn</h2>
            </div>
            <p class="mt-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <button
              style="background-color: #"
              type="button"
              @click="openService"
              class="text-white bg-yellow-500 px-4 py-3 rounded-full mt-4 inline-block hover:bg-yellow-500"
            >
              Our Servies
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="openServiceModal"
        class="w-full mt-8 mr-6 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-24 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12"
      >
        <Carousel v-bind="settings" :autoplay="7000" :wrap-around="true" :breakpoints="breakpoints">
          <Slide
            v-for="slide in 10"
            :key="slide"
            class="mr-4 sm:mr-16 md:mr-24 lg:mr-32"
          >
            <Service class="gap-x-12 mx-8" />
          </Slide>

          <template #addons class="bg-red">
            <Navigation class="text-white bg-slate-200" />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import Service from "../Service.vue";
import { ref, defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Service,
  },
  data: () => ({
    // carousel settings

    openServiceModal: ref(false),
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
  methods: {
    openService() {
      this.openServiceModal = !this.openServiceModal;
    },
  },
});
</script>
