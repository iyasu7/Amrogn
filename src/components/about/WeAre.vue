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
            v-for="service in services"
            :key="slide"
            class="mr-4 sm:mr-16 md:mr-24 lg:mr-32"
          >
            <Service :service="service" class="gap-x-12 mx-8" />
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
    services : [
  {
    title: "Dine-In Service",
    description: "Customers can enjoy meals in a comfortable and pleasant dining environment. Table service where waitstaff takes orders and serves food.",
    img: "https://source.unsplash.com/800x600/?restaurant-dine-in"
  },
  {
    title: "Takeout or Carry-Out",
    description: "Customers order food to be picked up and enjoyed elsewhere. This can include phone orders, online orders, or walk-in orders.",
    img: "https://source.unsplash.com/800x600/?restaurant-takeout"
  },
  {
    title: "Delivery Service",
    description: "Restaurants may offer delivery services to bring food directly to customers' homes or offices. This can be facilitated through in-house delivery staff or third-party delivery services.",
    img: "https://source.unsplash.com/800x600/?restaurant-delivery"
  },
  {
    title: "Catering",
    description: "Providing food and services for events such as weddings, parties, conferences, and corporate functions.",
    img: "https://source.unsplash.com/800x600/?restaurant-catering"
  },
  {
    title: "Online Ordering",
    description: "Facilitating orders through a restaurant's website or mobile app. Integration with third-party delivery platforms.",
    img: "https://source.unsplash.com/800x600/?restaurant-online-ordering"
  },
  {
    title: "Reservations",
    description: "Allowing customers to reserve tables in advance, especially for busy times. Some restaurants use reservation management systems for this.",
    img: "https://source.unsplash.com/800x600/?restaurant-reservations"
  },
  {
    title: "Event Hosting",
    description: "Hosting special events, theme nights, or promotions to attract customers. Live music, trivia nights, or themed parties are examples.",
    img: "https://source.unsplash.com/800x600/?restaurant-event-hosting"
  },
  {
    title: "Drive-Thru",
    description: "Offering a convenient option for customers to order and pick up without leaving their vehicles.",
    img: "https://source.unsplash.com/800x600/?restaurant-drive-thru"
  },
  {
    title: "Curbside Pickup",
    description: "Customers order online or by phone and pick up their food without entering the restaurant.",
    img: "https://source.unsplash.com/800x600/?restaurant-curbside-pickup"
  },
  {
    title: "Loyalty Programs",
    description: "Offering loyalty cards or digital programs to reward repeat customers with discounts, free items, or other perks.",
    img: "https://source.unsplash.com/800x600/?restaurant-loyalty-programs"
  },
  {
    title: "Educational Events",
    description: "Cooking classes, wine tastings, or workshops related to the restaurant's cuisine.",
    img: "https://source.unsplash.com/800x600/?restaurant-educational-events"
  },
  {
    title: "Special Menus",
    description: "Offering special menus for holidays, seasons, or specific dietary preferences (e.g., vegetarian, gluten-free).",
    img: "https://source.unsplash.com/800x600/?restaurant-special-menus"
  },
  {
    title: "Gift Cards",
    description: "Selling gift cards that customers can purchase and give to others or use at a later date.",
    img: "https://source.unsplash.com/800x600/?restaurant-gift-cards"
  },
  {
    title: "Mobile Payment",
    description: "Accepting mobile payment options for added convenience Accepting mobile payment options for added convenience.",
    img: "https://source.unsplash.com/800x600/?restaurant-mobile-payment"
  },
  {
    title: "Feedback and Reviews",
    description: "Encouraging customer feedback and online reviews to improve services and build a positive online reputation.",
    img: "https://source.unsplash.com/800x600/?restaurant-feedback-reviews"
  },
  {
    title: "Community Engagement",
    description: "Participating in or sponsoring community events to build relationships and support local initiatives.",
    img: "https://source.unsplash.com/800x600/?restaurant-community-engagement"
  }
],

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
