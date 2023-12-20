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
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide
            v-for="slide in 10"
            :key="slide"
            class="gap-12 mx-12 sm:mx-16 md:mx-24 lg:mx-32"
          >
            <div class="carousel__item mx-4 w-250">
              <div
                class="relative flex max-w-400 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div
                  class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="ui/ux review check"
                  />
                </div>
                <div class="p-6">
                  <h4
                    class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
                  >
                    UI/UX Review Check
                  </h4>
                  <p
                    class="block mt-3 font-sans text-xl text-ellipsis overflow-hidden line-clamp-2 sm:line-clamp-2 md:line-clamp-4 lg:line-clamp-4 antialiased font-normal leading-relaxed text-gray-700"
                  >
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                  </p>
                </div>
                <div class="flex items-center justify-between p-6">
                  <div class="flex items-center -space-x-3">
                    <img
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                      class="relative inline-block h-9 w-9 !rounded-full border-2 border-white object-cover object-center hover:z-10"
                    />
                    <img
                      alt="Tania Andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      class="relative inline-block h-9 w-9 !rounded-full border-2 border-white object-cover object-center hover:z-10"
                    />
                  </div>
                  <p
                    class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit"
                  >
                    January 10
                  </p>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
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
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
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
