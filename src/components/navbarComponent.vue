<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {useBottomSheetStore} from "../stores/bottomSheetStore.ts";
import CartBottomSheet from "../components/bottomSheet/bottomSheetItems/cartBottomSheet.vue";
import { useCartStore } from "../stores/cartStore.ts"
import {computed} from "vue";


const router = useRouter();
const navigateToHome = () => router.push({ name: 'home' });
const navigateToUser = () => router.push({ name: 'user' });

const route = useRoute();
const isHomePage = computed(() => route.name === 'home');

const bottomSheet = useBottomSheetStore();

const cartStore = useCartStore();

const totalItemQuantity = computed(() => {
  return cartStore.items.reduce((acc, item) => acc + item.quantity, 0);
});

function openCart() {
  bottomSheet.open(CartBottomSheet);
}
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
      <div class="relative">
        <div class="absolute top-0 right-0 transform translate-x-[3px] -translate-y-[5px]
                flex justify-center items-center h-[14px] w-[14px] bg-redDelete rounded-full text-white text-center text-[10px]">
          <div v-if="totalItemQuantity > 0">
            {{ totalItemQuantity }}
          </div>
          <div v-else>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99991 4.25834C5.98032 4.25834 6.87794 4.61703 7.55967 5.20626C7.71359 5.3394 7.80724 5.52701 7.82001 5.72782C7.83278 5.92863 7.76362 6.12618 7.62776 6.27702C7.4919 6.42787 7.30046 6.51964 7.09556 6.53215C6.89065 6.54467 6.68907 6.4769 6.53515 6.34376C6.1117 5.97638 5.56544 5.77401 4.99991 5.77501C4.41104 5.77501 3.87401 5.98886 3.46467 6.34376C3.38846 6.40963 3.29975 6.46015 3.20361 6.49243C3.10748 6.52471 3.00579 6.53812 2.90437 6.53189C2.80295 6.52565 2.70377 6.49991 2.6125 6.45611C2.52123 6.41232 2.43966 6.35133 2.37244 6.27665C2.30522 6.20196 2.25367 6.11502 2.22073 6.02081C2.18779 5.9266 2.17411 5.82695 2.18047 5.72755C2.18683 5.62816 2.2131 5.53096 2.25779 5.44152C2.30248 5.35208 2.36471 5.27213 2.44092 5.20626C3.1471 4.59452 4.05739 4.25733 4.99991 4.25834ZM2.29157 0.466675C2.59941 0.466675 2.89465 0.586518 3.11232 0.799841C3.33 1.01316 3.45229 1.30249 3.45229 1.60417C3.45229 1.90586 3.33 2.19519 3.11232 2.40851C2.89465 2.62183 2.59941 2.74167 2.29157 2.74167C1.98373 2.74167 1.6885 2.62183 1.47082 2.40851C1.25315 2.19519 1.13086 1.90586 1.13086 1.60417C1.13086 1.30249 1.25315 1.01316 1.47082 0.799841C1.6885 0.586518 1.98373 0.466675 2.29157 0.466675ZM7.70824 0.466675C8.01608 0.466675 8.31131 0.586518 8.52899 0.799841C8.74667 1.01316 8.86895 1.30249 8.86895 1.60417C8.86895 1.90586 8.74667 2.19519 8.52899 2.40851C8.31131 2.62183 8.01608 2.74167 7.70824 2.74167C7.4004 2.74167 7.10517 2.62183 6.88749 2.40851C6.66982 2.19519 6.54753 1.90586 6.54753 1.60417C6.54753 1.30249 6.66982 1.01316 6.88749 0.799841C7.10517 0.586518 7.4004 0.466675 7.70824 0.466675Z" fill="white"/>
            </svg>
          </div>
        </div>
        <button @click="openCart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9625 5.32739 21.004 5.15598 21.0005 4.98253C20.9969 4.80908 20.9485 4.63951 20.8598 4.49039C20.7711 4.34127 20.6453 4.2177 20.4946 4.13175C20.3439 4.04579 20.1735 4.0004 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" :fill="isHomePage ? 'white' : 'black'"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>





