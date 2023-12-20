<script setup>
import { useMainStore } from "../store";
const store = useMainStore();
const closeNews = () => {
    store.closeNews();
}
</script>

<template>
  <div
    class="absolute z-10 md:top-16 top-16 left-1/4 w-1/2 rounded-xl flex justify-center text-gray-500 bg-gray-100 shadow dark:text-gray-400 dark:bg-gray-100"
  >
    <div
      class="flex items-center p-4 dark:text-gray-900"
    >
      <span
        class="bg-green-600 text-fuchsia-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-green-600 dark:text-black border border-green-900"
      >
        <svg
          class="w-2.5 h-2.5 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
          /> 
        </svg>
        News
      </span>
      <div class="ms-3 text-lg font-bold flex justify-center text-center">
        4 Kilo Branch is Opening Soon.
      </div>
      <button
        type="button"
        @click="closeNews"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 items-center h-8 w-8 dark:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
