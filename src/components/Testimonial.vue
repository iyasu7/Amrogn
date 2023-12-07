<template>
    <section class="client_section layout_padding-bottom">
      <div class="container">
        <div class="heading_container heading_center text-white mb-8">
          <h2 class="text-3xl font-bold">
            What Our Customers Say
          </h2>
        </div>
        <div class="carousel-wrap grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="swiper-container client_swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="box bg-white p-6 rounded-md">
                  <div class="detail-box">
                    <p class="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <h6 class="text-blue-500 font-semibold mt-4">
                      Moana Michell
                    </h6>
                    <p class="text-gray-600 mt-2">
                      Magna aliqua
                    </p>
                  </div>
                  <div class="img-box mt-4">
                    <img src="images/client1.jpg" alt="" class="box-img rounded-full">
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box bg-white p-6 rounded-md">
                  <div class="detail-box">
                    <p class="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <h6 class="text-blue-500 font-semibold mt-4">
                      Mike Hamell
                    </h6>
                    <p class="text-gray-600 mt-2">
                      Magna aliqua
                    </p>
                  </div>
                  <div class="img-box mt-4">
                    <img src="images/client2.jpg" alt="" class="box-img rounded-full">
                  </div>
                </div>
              </div>
              <!-- Add more swiper slides as needed -->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Navigation -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import 'swiper/css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // If you have any script setup logic, you can add it here
  </script>
  
  <style scoped>
  /* Add your styles for the component here */
  </style>
  