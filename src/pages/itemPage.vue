<script setup lang="ts">
import { ref } from 'vue';
import itemCard from "../components/cards/itemCard.vue";
import drinkCard from "../components/cards/drinkCard.vue";
import bottomSheet from "../components/bottomSheet/bottomSheetComponent.vue";
import {useMenuStore} from "../stores/menuStore.ts";

const menuStore = useMenuStore();
const drinks = menuStore.menuItems.find(category => category.category === "Drinks")?.items;

const showBottomSheet = ref(false);

const handlePaymentClick = () => {
  showBottomSheet.value = true;
};
</script>

<template>
  <div class="flex flex-col px-5">
    <div class="my-4 flex overflow-y-auto scrollbar-none">
      <itemCard class="flex-none"/>
    </div>
    <h2 class="ml-5 mt-5 text-mainColor text-xs font-semibold">Getränke</h2>
    <div class="my-4 flex space-x-3 overflow-y-auto scrollbar-none">
      <drinkCard v-for="item in drinks" :key="item.id" :item="item" class="flex-none"/>
    </div>
    <div class="mt-4 border-b-2 border-b-gray-400 border-opacity-50"></div>
    <strong class="mt-4 text-mainColor text-xs font-semibold text-right leading-[18px]">Gesamt (inkl. MwSt.): €</strong>
    <button @click="handlePaymentClick" class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">WEITER ZUR BEZAHLUNG</button>
    <bottomSheet v-if="showBottomSheet" :onClose="() => showBottomSheet = false" />
  </div>
</template>
