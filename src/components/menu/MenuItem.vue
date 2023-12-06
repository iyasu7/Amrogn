<template>
    <div class="all" :class="`${item.category}`">
      <div class="box">
        <div>
          <div class="img-box">
            <img :src="item.image" alt="" />
          </div>
          <div class="detail-box">
            <h5>{{ item.name }}</h5>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo,
              quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div class="options">
              <h6>{{ item.price }}</h6>
              <a href="">
                <!-- Your SVG icon here -->
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles for the FoodItem component here */
  </style>
  