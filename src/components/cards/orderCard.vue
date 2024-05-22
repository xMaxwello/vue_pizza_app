<script setup lang="ts">
import {useOrderStore} from "../../stores/orderStore.ts";
import {useCartStore} from '../../stores/cartStore';
import {useBottomSheetStore} from "../../stores/bottomSheetStore.ts";
import CartBottomSheet from "../bottomSheet/bottomSheetItems/cartBottomSheet.vue";


const orderStore = useOrderStore();
const {reorder} = useCartStore();
const bottomSheet = useBottomSheetStore();


function reorderItems(items) {
  reorder(items);
  bottomSheet.open(CartBottomSheet);
}
</script>

<template>
  <div v-for="order in orderStore.orders" :key="order.id"
       class="w-full h-auto outline-none border-2 border-transparent bg-card rounded-[10px] mt-4 pt-2 px-2 flex flex-col ">

    <h2 class="pb-4 text-mainColor text-opacity-50 text-xs font-semibold">{{ order.timestamp.toLocaleString() }} / {{ order.total.toFixed(2) }}€</h2>
    <div class="flex flex-col justify-start mx-4">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="item in order.items" :key="item.id" class="flex flex-col items-center justify-end h-full">
          <img :src="item.image" alt="food" class="h-[50px] mb-2">
          <div class="text-center text-mainColor text-opacity-50 text-xs font-semibold">
            <p>{{ item.quantity }}x {{ item.size }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center py-2 text-price text-sm leading-[21px] font-semibold">
      <button @click="reorderItems(order.items)">ERNEUT BESTELLEN</button>
    </div>

  </div>
</template>

