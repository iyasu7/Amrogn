<script lang="ts" setup>
import { defineProps } from 'vue';

const { service } = defineProps(['service']);
console.log(service);

</script>


<template>
  <div
    class="relative gap-4 mx-4 flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-gray-700 bg-clip-border dark:text-white text-gray-500 shadow-md"
  >
    <div
      class="relative m-0 overflow-hidden dark:text-white bg-transparent rounded-none shadow-none bg-clip-border"
    >
      <img
        :src="service.img+'=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'"
        :alt="service.title"
      />
    </div>
    <div class="h-100 p-6">
      <h4
        class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-yellow-500"
      >
        {{service.title}}
      </h4>
      <p
        class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed dark:text-white text-ellipsis overflow-hidden line-clamp-2 sm:line-clamp-2 md:line-clamp-4 lg:line-clamp-4"
      >
        {{service.description}}
      </p>
    </div>
  </div>
</template>

