<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      lat: null,
      lng: null,
      apikey: "AIzaSyB5taLi9Xpf2sjwzx8B5JeldlcgDj7Qh4o",
    };
  },
  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="m-6 bg-gray-800" style="background-color: #a72a2a">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-800">
      <div
        class="col-span-1 box-border px-6 m-12 bg-white border rounded-lg shadow hover:bg-gray-100"
      >
        <h2>Our Branchs</h2>
      </div>
      <div class="col-span-2">
        <iframe
          class="box-border h-96 p-6 bg-white border border-white rounded-lg shadow hover:bg-gray-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847311538421!2d38.73480407424829!3d8.986194391073461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859895a5738b%3A0x13436b018d17807d!2sAmrogn%20Chicken%20%7C%20Mekanisa!5e0!3m2!1sen!2set!4v1701947366853!5m2!1sen!2set"
          width="100%"
          style="background-color: #fff"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add styles to the map container */
div {
  color: green;
  background-color: aliceblue;
  font-family: "Courier New", Courier, monospace;
}
.map-container {
  width: 100%;
  height: 400px;
  margin: 20px 0;
  /* Add a border and shadow to the container */
  border: 1px solid gray;
  box-shadow: 2px 2px 5px #ccc;
}
</style>
