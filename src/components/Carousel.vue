<template>
    <section className="slider_section">
      <JumbotronCarousel :items="carouselItems" />
    </section>
  </template>
  
  <script setup>
  import JumbotronCarousel from "./JumbotronCarousel.vue";
  
  const carouselItems = [
    {
      title: "Fast Food Restaurant",
      description:
        "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
      buttonText: "Order Now",
      buttonLink: "#",
    },
    // Add more items as needed
  ];
  </script>
  