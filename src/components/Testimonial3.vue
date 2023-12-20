<template>
  <div my-12 mt-36>
    <h2
      class="text-3xl flex justify-center font-bold tracking-tight text-gray-900 sm:text-4xl"
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
        class="p-24 "
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
                <vue3-star-ratings class="text-3xl flex justify-center" numberOfStars="5" disableClick="true" v-model="testimonial.rating" />
                <div class="mt-4">
                  <p class="text-lg font-bold text-rose-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl line-clamp-1 sm:line-clamp-2">
                    {{ testimonial.title }}
                  </p>

                  <p class="mt-4 leading-relaxed text-gray-700 text-ellipsis overflow-hidden line-clamp-2 sm:line-clamp-2 md:line-clamp-4 lg:line-clamp-4">
                    {{ testimonial.comment }}
                  </p>
                </div>
              </div>

              <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {{ testimonial.name }}
              </footer>
            </blockquote>
          </div>
        </div>
      </Slide>
      <pre>{{ breakpoints }}</pre>
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
        title: "Delicious Chicken Feast!",
        comment:
          "I can never get enough of the mouth-watering chicken dishes at this restaurant. The flavors are incredible, and the variety of options keeps me coming back for more!",
        name: "John Smith",
        rating: 4,
      },
      {
        title: "Best Rice Bowls in Town!",
        comment:
          "The rice bowls here are a true delight. The perfect blend of flavors and textures makes every bite a satisfying experience. I highly recommend trying them!",
        name: "Emily Davis",
        rating: 5,
      },
      {
        title: "Unforgettable Mofo Shawarma",
        comment:
          "Mofo shawarma here is a game-changer! The combination of juicy chicken, fresh veggies, and the special sauce is simply irresistible. My taste buds thank me every time!",
        name: "Michael Johnson",
        rating: 3.4,
      },
      {
        title: "Hearty Chicken Platter",
        comment:
          "The chicken platter is a feast for the senses. The portions are generous, and the seasoning is spot-on. This restaurant never disappoints when it comes to serving up delicious chicken!",
        name: "Sarah Thompson",
        rating: 4.5,
      },
      {
        title: "Rice Perfection!",
        comment:
          "I am a rice enthusiast, and this restaurant has truly mastered the art of preparing the perfect rice dishes. Every grain is flavorful and cooked to perfection. I'm a devoted fan!",
        name: "Daniel White",
        rating: 5,
      },
      {
        title: "Mofo Shawarma Magic",
        comment:
          "Mofo shawarma is a taste sensation like no other. The savory goodness of the chicken combined with the unique blend of spices is pure magic. It keeps me coming back for more!",
        name: "Jessica Turner",
        rating: 4.8,
      },
      {
        title: "Chicken Bliss!",
        comment:
          "The chicken dishes at this restaurant are pure bliss. From grilled to roasted, every chicken dish is a flavor explosion. If you love chicken, this is the place to be!",
        name: "Matthew Harris",
        rating: 4.3,
      },
      {
        title: "Savory Rice Bowls",
        comment:
          "The rice bowls are a delight to the senses. The savory flavors and variety of toppings create a culinary experience that I can never get enough of. Highly recommended!",
        name: "Olivia Carter",
        rating: 4.6,
      },
      {
        title: "Mofo Shawarma Delight",
        comment:
          "Mofo shawarma is a delight for the taste buds. The perfect combination of ingredients and the secret sauce make it a must-try dish at this fantastic restaurant!",
        name: "Ethan Robinson",
        rating: 5,
      },
      {
        title: "Chicken Feast Extravaganza",
        comment:
          "I recently had the chicken feast at this restaurant, and it was an absolute extravaganza of flavors. The variety of chicken dishes on the menu is impressive, and each one is a winner!",
        name: "Sophia Miller",
        rating: 4.8,
      },
      {
        title: "Rice Bowl Paradise",
        comment:
          "This restaurant is a rice bowl paradise. The options are diverse, and the flavors are out of this world. I've never had a dull moment with their delectable rice bowls!",
        name: "Christopher Lewis",
        rating: 4.9,
      },
      {
        title: "Mofo Shawarma Wonder",
        comment:
          "The mofo shawarma is a wonder on a plate! The tender chicken, the fresh veggies, and the special sauce create a flavor explosion that leaves me craving more every time.",
        name: "Isabella Bennett",
        rating: 4.5,
      },
      {
        title: "Chicken Mastery",
        comment:
          "The chefs at this restaurant are true masters when it comes to preparing chicken dishes. The flavors are rich, and the attention to detail is evident in every bite. Highly impressed!",
        name: "Aiden Reed",
        rating: 4.7,
      },
      {
        title: "Satisfaction Guaranteed",
        comment:
          "Satisfaction is guaranteed at this restaurant. Whether it's the chicken, rice bowls, or mofo shawarma, the quality and taste consistently exceed expectations. A loyal customer for life!",
        name: "Ava Thompson",
        rating: 4.6,
      },
      {
        title: "Rice Elegance",
        comment:
          "Elegance in every bite! The rice dishes at this restaurant are a true culinary masterpiece. The presentation, the aroma, and, most importantly, the taste, are unmatched!",
        name: "Nathan Bennett",
        rating: 5,
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
        itemsToShow.value = 1.25;
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
