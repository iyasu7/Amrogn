<template>
  <div my-12 mt-36>
    <h2
      class="text-3xl flex justify-center font-bold tracking-tight text-yellow-500 sm:text-4xl"
    >
      Don't just take our word for it...
    </h2>
    <Carousel
      :itemsToShow="itemsToShow"
      :autoplay="2000"
      :wrapAround="true"
      :transition="500"
    >
      <Slide
        class="p-24"
        v-for="testimonial in testimonials"
        :key="testimonial.name"
      >
        <!-- <div class="carousel__item">{{ slide }}</div> -->
        <div class="carousel__item card shadow-y-xl">
          <div class="keen-slider__slide">
            <blockquote
              class="flex h-full p-16 my-4 rounded-lg flex-col justify-center shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <vue3-star-ratings
                  class="text-3xl flex justify-center"
                  numberOfStars="5"
                  disableClick="true"
                  v-model="testimonial.rating"
                />
                <div class="mt-4">
                  <p
                    class="text-lg font-bold text-rose-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl line-clamp-1 sm:line-clamp-2"
                  >
                    {{ testimonial.title }}
                  </p>

                  <p
                    class="mt-4 leading-relaxed dark:text-white text-gray-500 text-ellipsis overflow-hidden line-clamp-2 sm:line-clamp-2 md:line-clamp-4 lg:line-clamp-4"
                  >
                    {{ testimonial.comment }}
                  </p>
                </div>
              </div>

              <footer class="mt-4 text-sm font-medium dark:text-white text-gray-500  sm:mt-6">
                &mdash; {{ testimonial.name }}
              </footer>
            </blockquote>
          </div>
        </div>
      </Slide>
      ...
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import vue3starRatings from "vue3-star-ratings";
export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    vue3starRatings,
  },
  setup() {
    const carouselRef = ref(null);
    const itemsToShow = ref(1.45);

    const testimonials = [
      {
        title: "Truly the best shawarma place in town",
        comment:
          "hey have branches at Piassa, Merkato, Mekanisa and CMC. The consistency in their taste is incredible. The price is also very fair. You can pay in any form u want, cash or mobile payment. Even if there might be a lot of customers your order doesn't take more than 10mis. Highly recommend it.",
        name: "Samuel Haddis",
        rating: 5,
      },
      {
        title: "the food was yummy",
        comment:
          "It's my second time visiting this place and both times the food was yummy 😋. The place is always BUSY ,they don't have much space. You can\'t spend time chatting with a friend. You eat- and you go out! Total recommended ✔",
        name: "Afom K.F.S",
        rating: 5,
      },
      {
        title: "One of the best chicken dishes in Addis",
        comment:
          "Kudos to the chef's preparing the tasty Food 😋.I am giving 4 because of the service. The waiters are too busy with the orders and they couldn't even listen for the customer",
        name: "Ermias Alemayehu",
        rating: 4,
      },
      {
        title: "Definitely the place in Addis for Chicken",
        comment:
          "But don't expect prompt or speedy service... patience is needed... to get the .menu, to get the food and to pay for the food. But the food is worth it!!! It is recommended dishes like Fries, French Fries, Chicken Shawarma",
        name: "Dave DaCosta",
        rating: 4.5,
      },
      {
        title: "Amrogn got z best chicken and shawarma in Addis",
        comment:
          "The only problem is it's very crowded, even in fasting seasons. Its hard to get the waiters again after you order sometng( but z waiters were very nice despite them being busy) I loved it, I'm definitely going back!",
        name: "Binyam Solomon",
        rating: 5,
      },
      {
        title: "Love it",
        comment:
          "Best Chicken, especially shawarma, in the country. Love it. I recommend you to try the Grilled Chicken, Fries, Roasted Chicken with Fried Rice, Chicken Shawarma",
        name: "Leul T Agonafer",
        rating: 4.8,
      },
      {
        title: "My go to chicken shawarma spot",
        comment:
          "Very delicious food and fast service. You can also call ahead and order so you can pick it up when you get there as parking might be an issue.",
        name: "Bemnet Adam",
        rating: 5,
      },
      {
        title: "From outside, I can smell a delicious aroma",
        comment:
          "simply 1 of the best spots in addis if your craving chicken",
        name: "Mohammed Ahmed",
        rating: 5,
      },
      {
        title: "The food here is awesome",
        comment:
          "especially the shawarma and chicken. The service was decent. It is just that the waiters are a bit overwhelmed, but overall, one of the best restaurants in Addis.",
        name: "Hassan Umar",
        rating: 5,
      },
      {
        title: "One of the best shawarma places in town",
        comment:
          "Those that do not like it when shawarma is dry will appreciate this place.",
        name: "Sophia Miller",
        rating: 4,
      },
      {
        title: "The kids loves the chicken fajitas 😋",
        comment:
          "Excellent food 😋 but the waiters were out numbered to provide sufficient service to customers, so please add more waiters.",
        name: "Eyob and Tom",
        rating: 4.9,
      },
      {
        title: "delicious chicken",
        comment:
          "I am not into chicken however this restaurant has a finger liking chicken dishes.",
        name: "Isabella Bennett",
        rating: 4.5,
      },
    ];

    const screens = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    };

    const sm = (val) => val >= screens.sm && val <= screens.md;
    const md = (val) => val >= screens.md && val <= screens.lg;
    const lg = (val) => val >= screens.lg && val <= screens.xl;
    const xl = (val) => val >= screens.xl;

    const getBreakpoint = (w) => {
      if (sm(w)) return "sm";
      else if (md(w)) return "md";
      else if (lg(w)) return "lg";
      else if (xl(w)) return "xl";
      else return "all";
    };

    const breakpoints = {
      w: window.innerWidth,
      h: window.innerHeight,
      is: getBreakpoint(window.innerWidth),
    };

    const updateBreakpoints = () => {
      if (breakpoints.is === "all") {
        itemsToShow.value = 1;
      } else if (breakpoints.is === "sm") {
        itemsToShow.value = 1.45;
      } else if (breakpoints.is === "md") {
        itemsToShow.value = 2.45;
      } else if (breakpoints.is === "lg") {
        itemsToShow.value = 2.45;
      } else if (breakpoints.is === "xl") {
        itemsToShow.value = 2.45;
      }
    };

    const handleResize = () => {
      breakpoints.w = window.innerWidth;
      breakpoints.h = window.innerHeight;
      breakpoints.is = getBreakpoint(window.innerWidth);
    };

    watch(breakpoints, () => {
      updateBreakpoints();
    });

    onMounted(() => {
      updateBreakpoints();
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      // Optionally, you can remove the breakpoints config if needed
      // carouselRef.value.removeBreakpointsConfigs();
    });

    return { carouselRef, itemsToShow, testimonials, breakpoints };
  },
});
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 200px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.7);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-30deg) scale(0.75);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(30deg) scale(0.75);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.5);
}
.left-1 {
  transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
}
</style>
