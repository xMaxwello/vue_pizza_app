<script setup lang="ts">
import { useMenuStore } from '../stores/menuStore';
import mainCard from "../components/cards/mainCard.vue";
import smallCard from "../components/cards/smallCard.vue";

const menuStore = useMenuStore();
const pizza = menuStore.menuItems.find(category => category.category === "Pizza")?.items;
const antipasti = menuStore.menuItems.find(category => category.category === "Antipasti")?.items;
const salat = menuStore.menuItems.find(category => category.category === "Salat")?.items;

</script>


<template>
  <div class="flex flex-col">
    <h2 class="ml-5 mt-10 text-mainColor text-xs font-semibold leading-[18px]">Am häufigsten bestellt</h2>
    <div class="mt-4 flex space-x-3 overflow-y-auto scrollbar-none px-5">
      <mainCard v-for="item in pizza" :key="item.id" :item="item" :category="'Pizza'" class="flex-none"/>
    </div>
    <h2 class="ml-5 mt-10 text-mainColor text-xs font-semibold">Antipasti Vorspeisen</h2>
    <div class="mt-4 flex space-x-3 overflow-y-auto scrollbar-none px-5">
      <smallCard v-for="item in antipasti" :key="item.id" :item="item" :category="'Antipasti'" class="flex-none"/>
    </div>
    <h2 class="ml-5 mt-10 text-mainColor text-xs font-semibold">Salate</h2>
    <div class="mt-4 flex space-x-3 overflow-y-auto scrollbar-none px-5">
      <smallCard v-for="item in salat" :key="item.id" :item="item" :category="'Salat'" class="flex-none"/>
    </div>
  </div>
</template>
