<script setup lang="ts">
import orderCard from "../components/cards/orderCard.vue";
import userComponent from "../components/userComponent.vue";


</script>

<template>
<div class="flex flex-col px-5 ">
  <div class="mt-10 flex justify-between w-full items-center">
    <h2 class="text-mainColor text-xs font-semibold">Letzte Bestellungen</h2>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M20.1299 17.67L21.8999 15.9L11.9999 6L2.0999 15.9L3.8699 17.67L11.9999 9.54L20.1299 17.67Z" fill="#001427"/>
      </g>
    </svg>
  </div>
  <orderCard class="flex-none"/>

  <div class="mt-10 flex justify-between w-full items-center">
    <h2 class="text-mainColor text-xs font-semibold">Einstellungen</h2>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M20.1299 17.67L21.8999 15.9L11.9999 6L2.0999 15.9L3.8699 17.67L11.9999 9.54L20.1299 17.67Z" fill="#001427"/>
      </g>
    </svg>
  </div>
  <userComponent class="flex-none"/>


</div>
</template>
