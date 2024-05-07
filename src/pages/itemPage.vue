<script setup lang="ts">
import itemCard from "../components/cards/itemCard.vue";
import drinkCard from "../components/cards/drinkCard.vue";
import bottomSheet from "../components/bottomSheet/bottomSheetComponent.vue";


</script>

<template>
  <div class="flex flex-col px-5">
    <div class="my-4 flex overflow-y-auto scrollbar-none">
      <itemCard class="flex-none"/>
    </div>
    <h2 class="ml-5 mt-5 text-mainColor text-xs font-semibold">Getränke</h2>
    <div class="my-4 flex space-x-3 overflow-y-auto scrollbar-none">
      <drinkCard class="flex-none"/>
    </div>
    <div class="mt-4 border-b-2 border-b-gray-400 border-opacity-50"></div>
    <strong class="mt-4 text-mainColor text-xs font-semibold text-right leading-[18px]">Gesamt (inkl. MwSt.): €</strong>
    <button class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">WEITER ZUR BEZAHLUNG</button>
  </div>

  <bottomSheet/>
</template>
