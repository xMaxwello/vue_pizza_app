<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useBottomSheetStore } from '../../../stores/bottomSheetStore';

const router = useRouter();
const bottomSheetStore = useBottomSheetStore();

const navigateHome = () => {
  router.push('/');
  bottomSheetStore.close();
};
</script>

<template>
  <div class="flex flex-col justify-between h-[652px]">
    <div>
      <div class="flex justify-center mt-4">
        <img src="/src/assets/order-done.svg" alt="order complete"/>
      </div>
      <div class="flex justify-center mt-8">
        <strong class="text-mainColor text-center text-base font-semibold leading-[18px]">
          Danke für deine <br/> Bestellung!
        </strong>
      </div>
    </div>

    <div class="w-full mb-10">
      <button @click="navigateHome" class="w-full h-[40px] text-price rounded-[20px] text-sm leading-[21px] font-semibold">
        ZURÜCK ZUR STARTSEITE
      </button>
    </div>
  </div>
</template>


