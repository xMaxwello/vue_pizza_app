<script setup lang="ts">
import {useOrderStore} from "../../stores/orderStore.ts";

const orderStore = useOrderStore();

</script>

<template>
  <div v-for="order in orderStore.orders" :key="order.id"
       class="w-full h-auto outline-none border-2 border-transparent bg-card rounded-[10px] mt-4 pt-2 px-2 flex flex-col ">

    <h2 class="pb-4 text-mainColor text-opacity-50 text-xs font-semibold">{{ order.timestamp.toLocaleString() }} / {{ order.total.toFixed(2) }}€</h2>
    <div class="flex flex-col justify-start mx-4">
      <ul>
        <li v-for="item in order.items" :key="item.id">
          <img :src="item.image" alt="food">
          <h3 class="text-mainColor text-opacity-50 text-xs font-semibold pt-2">{{ item.quantity }}x</h3>
          <h3 class="text-mainColor text-opacity-50 text-xs font-semibold">{{ item.size }}</h3>
        </li>
      </ul>
    </div>

    <div class="flex justify-center py-2 text-price text-sm leading-[21px] font-semibold">
      <button>ERNEUT BESTELLEN</button>
    </div>

  </div>
</template>

