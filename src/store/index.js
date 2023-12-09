import { defineStore } from 'pinia'

export const useMainStore = defineStore('user', {
  state: () => ({
    menuItems : [
      {
        name: "Delicious Shewarma",
        price: "$20",
        image: "src/assets/Ads-Roasted-removebg-preview.png",
        tags: ["Chicken", "Fries"],
      },
      {
        name: "Delicious Mofo",
        price: "$15",
        image: "src/assets/Ads-Fried-Chicken-removebg-menu.png",
        tags: ["Chicken", "Fries", "Rice"],
      },
      {
        name: "Delicious Shewarma",
        price: "$17",
        image: "src/assets/Ads-Mofo-removebg-preview.png",
        tags: ["Shewarma", "Chicken", "Fries"],
      },
      {
        name: "Delicious Rice",
        price: "$18",
        image: "src/assets/Ads-Shawarma-removebg-preview.png",
        tags: ["Rice", "Chicken"],
      },
      {
        name: "French Fries",
        price: "$10",
        image: "src/assets/Ads-Roasted-removebg-preview.png",
        tags: ["fries"],
      },
      {
        name: "Delicious Shewarma",
        price: "$15",
        image: "src/assets/Ads-Shawarma-removebg-preview.png",
        tags: ["Shewarma", "Chicken", "Fries"],
      },
      {
        name: "Chicken Roasted",
        price: "$12",
        image: "src/assets/Ads-Roasted-removebg-preview.png",
        tags: ["Chicken"],
      },
      {
        name: "Tasty Mofo",
        price: "$14",
        image: "src/assets/Ads-Mofo-removebg-preview.png",
        tags: ["Meat", "Fries"],
      },
    ],
  }),
  actions: {

  },
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
})