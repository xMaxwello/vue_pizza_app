<script setup lang="ts">
import orderCard from "../components/cards/orderCard.vue";

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
  <div>
    <form class="mx-5 my-4 flex flex-col space-y-5">
      <div class="flex">
        <label for="name" class="w-32 text-mainColor text-xs leading-[18px]">Name</label>
        <input type="text" name="name" id="name" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="email" class="w-32 text-mainColor text-xs leading-[18px]">E-Mail</label>
        <input type="email" name="email" id="email" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="address" class="w-32 text-mainColor text-xs leading-[18px]">Adresse</label>
        <input type="text" name="address" id="address" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="postcode" class="w-32 text-mainColor text-xs leading-[18px]">PLZ</label>
        <input type="text" name="postcode" id="postcode" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="passwort" class="w-32 text-mainColor text-xs leading-[18px]">Passwort</label>
        <input type="password" name="passwort" id="passwort" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
    </form>
  </div>


</div>
</template>
