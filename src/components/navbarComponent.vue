<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";
import { useBottomSheetStore } from "../stores/bottomSheetStore.ts";

const router = useRouter();
const bottomSheetStore = useBottomSheetStore();
const route = useRoute();


const navigateToHome = () => router.push({ name: 'home' });
const navigateToUser = () => router.push({ name: 'user' });

const isHomePage = computed(() => route.name === 'home');

const openCart = () => {
  console.log("Opening cart from Navbar");
  bottomSheetStore.show();
};

</script>

<template>
  <header class="fixed w-full h-36 z-10 flex bg-white justify-center items-center">
    <img :class="{'hidden': !isHomePage}" class="w-full h-full object-cover absolute top-0 left-0 right-0 z-0" src="../assets/navbar-bg.svg" alt="header bg"/>

    <div class="flex justify-between items-center w-full px-5 z-20">
      <button @click="navigateToUser">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" :fill="isHomePage ? 'white' : 'black'"/>
        </svg>
      </button>
      <button @click="navigateToHome">
        <img class="flex justify-center items-center" src="../assets/logo.svg" alt="logo"/>
      </button>
      <button @click="openCart">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9625 5.32739 21.004 5.15598 21.0005 4.98253C20.9969 4.80908 20.9485 4.63951 20.8598 4.49039C20.7711 4.34127 20.6453 4.2177 20.4946 4.13175C20.3439 4.04579 20.1735 4.0004 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" :fill="isHomePage ? 'white' : 'black'"/>
        </svg>
      </button>
    </div>
  </header>
</template>

