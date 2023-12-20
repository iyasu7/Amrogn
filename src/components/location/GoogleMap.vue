<script setup>
// export default {
//   name: "GoogleMap",
//   data() {
//     return {
//       lat: null,
//       lng: null,
//       apikey: "AIzaSyB5taLi9Xpf2sjwzx8B5JeldlcgDj7Qh4o",
//     };
//   },
//   created() {
//     this.$getLocation()
//       .then((coordinates) => {
//         this.lat = coordinates.lat;
//         this.lng = coordinates.lng;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
// };

import { onMounted, ref } from "vue";

const curBranch = ref({});
onMounted(() => {
  console.log(locations[0]);
  curBranch.value = locations[0];
  console.log(curBranch.value);
});
const locations = [
  {
    id: 1,
    name: "Mekannisa",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847311538421!2d38.73480407424829!3d8.986194391073461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859895a5738b%3A0x13436b018d17807d!2sAmrogn%20Chicken%20%7C%20Mekanisa!5e0!3m2!1sen!2set!4v1701947366853!5m2!1sen!2set",
    phones: ["(+251) 910 22 3333", "(+251) 916 84 8574"],
  },
  {
    id: 2,
    name: "Piassa",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3841890234835!2d38.74916137424888!3d9.028673691032637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e231bf6445%3A0x9887bb7e7fb4c330!2sAmrogn%20Chicken!5e0!3m2!1sen!2set!4v1702110156788!5m2!1sen!2set",
    phones: ["(+251) 910 22 3333", "(+251) 916 84 8574"],
  },
  {
    id: 3,
    name: "Merkato",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3461540851886!2d38.73656857424899!3d9.032153591029296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85582ea19511%3A0x42bfa14b77382442!2zQW1yb2duIENoaWNrZW4gfCBNZXJrYXRvIEJyYW5jaCB8IOGKoOGIneGIruGKnSDhibrhiq3hipUgfCDhiJjhiK3hiqvhibY!5e0!3m2!1sen!2set!4v1702110221885!5m2!1sen!2set",
    phones: ["(+251) 910 22 3333", "(+251) 916 84 8574"],
  },
  {
    id: 2,
    name: "CMC",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.509039444196!2d38.84891717424872!3d9.017241491043626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9bfe0fcb5e7d%3A0x28469f0a408bc3bd!2sAmrogn%20Chicken%20(CMC)!5e0!3m2!1sen!2set!4v1702110060785!5m2!1sen!2set",
    phones: ["(+251) 910 22 3333", "(+251) 916 84 8574"],
  },
  {
    id: 2,
    name: "Bole",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.280950455265!2d38.762228763934175!3d9.005190736087487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b039c25bc1%3A0x941677a8f60160fe!2sDembel%20City%20Center!5e0!3m2!1sen!2set!4v1702112497117!5m2!1sen!2set",
    phones: ["(+251) 910 22 3333", "(+251) 916 84 8574"],
  },
];
const goToLocation = (branch) => {
  curBranch.value = branch;
};
</script>

<template>
  <div
    id="location"
    class="mx-2 sm:mx-4 md:mx-6 lg:mx-12 my-6 md:my-12 bg-gray-100"
  >
    <div class="flex justify-center items-center">
      <h2 class="text-4xl text-gray-900 font-bold p-4">Our Locations</h2>
    </div>
    <div class="md:flex mx-2 sm:mx-4 md:mx-6">
      <ul
        class="p-6 flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
      >
        <li>
          <button
            @click="goToLocation(locations[0])"
            class="inline-flex items-center px-4 py-3 rounded-lg w-full"
            :class="{
              ' hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white':
                curAddress !== locations[0].address,
              ' text-white  dark:bg-red-700':
                curAddress === locations[0].address,
            }"
            aria-current="page"
          >
            <svg
              class="w-4 h-4 me-2 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              />
            </svg>
            Mekanissa
          </button>
        </li>
        <li>
          <button
            @click="goToLocation(locations[1])"
            class="inline-flex items-center px-4 py-3 rounded-lg w-full"
            :class="{
              'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white':
                curAddress !== locations[1].address,
              'inline-flex items-center px-4 py-3 rounded-lg cursor-not-allowed text-white  dark:bg-red-700':
                curAddress === locations[1].address,
            }"
          >
            <svg
              class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
              />
            </svg>
            Piassa
          </button>
        </li>
        <li>
          <button
            @click="goToLocation(locations[2])"
            class="inline-flex items-center px-4 py-3 rounded-lg w-full"
            :class="{
              ' hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white':
                curAddress !== locations[2].address,
              ' text-white  dark:bg-red-700':
                curAddress === locations[2].address,
            }"
          >
            <svg
              class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
              />
            </svg>
            Merkato
          </button>
        </li>
        <li>
          <button
            @click="goToLocation(locations[3])"
            class="inline-flex items-center px-4 py-3 rounded-lg w-full"
            :class="{
              'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white':
                curAddress !== locations[3].address,
              'inline-flex items-center px-4 py-3 rounded-lg cursor-not-allowed text-white  dark:bg-red-700':
                curAddress === locations[3].address,
            }"
          >
            <svg
              class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"
              />
              <path
                d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"
              />
            </svg>
            CMC
          </button>
        </li>
        <li>
          <button
            @click="goToLocation(locations[4])"
            class="inline-flex items-center px-4 py-3 rounded-lg w-full"
            :class="{
              'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white':
                curAddress !== locations[4].address,
              'inline-flex items-center px-4 py-3 rounded-lg cursor-not-allowed text-white  dark:bg-red-700':
                curAddress === locations[4].address,
            }"
          >
            <svg
              class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"
              />
              <path
                d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"
              />
            </svg>
            Bole
          </button>
        </li>
      </ul>
      <div
        class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full"
      >
        <iframe
          class="box-border h-96 p-6 bg-white border border-white rounded-lg shadow hover:bg-gray-100"
          :src="curBranch.address"
          width="100%"
          style="background-color: #222831"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="md:flex mx-2 sm:mx-4 md:mx-6  mt-6">
          <h2 class="text-2xl font-bold text-slate-950">{{ curBranch.name }} Branch Phones</h2>
          <div v-for="phone in curBranch.phones">
            <div class="flex mx-12"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#222831"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.506 7.96A16.027 16.027 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.998-1.05a9.94 9.94 0 0 0 2.656-.639l1.52 1.52a12.049 12.049 0 0 0 5.657-5.657l-1.52-1.52a9.94 9.94 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.21 0 4.051 1.819 3.506 3.96Z"
                  />
                </svg>{{ phone }}</div>
          </div>
        </div>
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
