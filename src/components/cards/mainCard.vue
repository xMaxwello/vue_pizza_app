<script setup lang="ts">
import {useRouter } from "vue-router";

const router = useRouter();
const navigateToItem = () => router.push({ name: 'item' });

</script>

<template>
  <button @click="navigateToItem" class="w-[150px] h-[180px] outline-none border-2 border-transparent bg-card rounded-[10px] pt-5 px-4 pb-4 flex flex-col justify-center items-center">
    <img src="/src/assets/food/Margherita.svg" alt=""/>
    <span class="mt-3 text-mainColor text-xs font-normal text-center leading-[18px]">Test</span>
    <strong class="mt-auto text-price text-center leading-6">Test</strong>
  </button>
</template>