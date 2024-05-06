<script setup lang="ts">
import mainCard from "../components/cards/mainCard.vue";
import smallCard from "../components/cards/smallCard.vue";


</script>

<template>
  <div class="flex flex-col">
    <h2 class="ml-5 mt-10 text-mainColor text-xs font-semibold leading-[18px]">Am häufigsten bestellt</h2>
    <div class="mt-4 flex space-x-3 overflow-y-auto scrollbar-none px-5">
      <mainCard class="flex-none"/>
    </div>
    <h2 class="ml-5 mt-10 text-mainColor text-xs font-semibold">Antipasti Vorspeisen</h2>
    <div class="mt-4 flex space-x-3 overflow-y-auto scrollbar-none px-5">
      <smallCard class="flex-none"/>
    </div>
    <h2 class="ml-5 mt-10 text-mainColor text-xs font-semibold">Salate</h2>
    <div class="my-4 flex space-x-3 overflow-y-auto scrollbar-none px-5">
      <smallCard class="flex-none"/>
    </div>
  </div>
</template>
