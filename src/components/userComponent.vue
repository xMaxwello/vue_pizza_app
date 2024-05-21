<script setup lang="ts">
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>

<template>
  <div>
    <form class="my-4 flex flex-col space-y-5">
      <div class="flex">
        <label for="name" class="w-32 text-mainColor text-xs leading-[18px]">Name</label>
        <input v-model="userStore.user.name" type="text" name="name" id="name" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="email" class="w-32 text-mainColor text-xs leading-[18px]">E-Mail</label>
        <input v-model="userStore.user.email" type="email" name="email" id="email" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="address" class="w-32 text-mainColor text-xs leading-[18px]">Adresse</label>
        <input v-model="userStore.user.address" type="text" name="address" id="address" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="postcode" class="w-32 text-mainColor text-xs leading-[18px]">PLZ</label>
        <input v-model="userStore.user.postcode" type="text" name="postcode" id="postcode" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
      <div class="flex">
        <label for="passwort" class="w-32 text-mainColor text-xs leading-[18px]">Passwort</label>
        <input v-model="userStore.user.password" type="password" name="passwort" id="passwort" class="w-full outline-none border-b-2 text-mainColor text-xs leading-[18px]"/>
      </div>
    </form>
  </div>
</template>