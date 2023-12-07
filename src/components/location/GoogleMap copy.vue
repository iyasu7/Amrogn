<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  name: "GoogleMap",
  components: {
    GoogleMap,
    Marker,
  },
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
  <GoogleMap
    :api-key="apikey"
    style="width: 100%; height: 500px"
    :center="{ lat: lat, lng: lng }"
    :zoom="15"
  >
    <Marker :options="{ position: { lat: lat, lng: lng } }" />
  </GoogleMap>
</template>
