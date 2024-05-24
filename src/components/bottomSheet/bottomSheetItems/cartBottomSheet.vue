<script setup lang="ts">
import {computed, defineEmits} from 'vue';
import { useCartStore } from '../../../stores/cartStore.ts';
import OrderBottomSheet from "./orderBottomSheet.vue";
import {useBottomSheetStore} from "../../../stores/bottomSheetStore.ts";
import {useOrderStore} from "../../../stores/orderStore.ts";

const emit = defineEmits(['close']);
const cartStore = useCartStore();
const bottomSheet = useBottomSheetStore();
const orderStore = useOrderStore();


const orderNow = () => {
  if (cartStore.items.length > 0) {
    orderStore.addOrder([...cartStore.items], cartStore.total);
    cartStore.clearCart();
    bottomSheet.open(OrderBottomSheet);
  }
};

const close = () => {
  emit('close');
};

const tax = computed(() => {
  return cartStore.subtotal * 0.19;
});

const removeItem = (id, size) => {
  cartStore.removeItem(id, size);
};


</script>

<template>
  <div class="flex flex-col justify-between h-[652px]">

    <div class="flex flex-col justify-start">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="item in cartStore.items" :key="item.id">
          <div class="flex flex-col items-end">
            <button @click="removeItem(item.id, item.size)" class="flex justify-center items-center h-[14px] w-[14px] bg-redDelete rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div class="flex flex-col items-center justify-end">
            <img :src="`/${item.image}`" alt="food" class="h-[50px] mb-2 object-cover">
            <div class="text-center text-mainColor text-opacity-50 text-xs font-semibold">
              <p>{{ item.quantity }}x {{ item.size }}</p>
            </div>
          </div>
        </div>
      </div>


      <div v-if="cartStore.items.length > 0" class="pt-8">
        <div class="flex justify-between">
          <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">Gesamtsumme</strong>
          <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">{{ cartStore.subtotal.toFixed(2) }}€</strong>
        </div>
        <div class="flex justify-between">
          <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">MwSt.</strong>
          <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">{{ tax.toFixed(2) }}€</strong>
        </div>
        <div class="mt-4 border-b-2 border-b-gray-400 border-opacity-70"></div>
        <div class="flex justify-between">
          <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">Total</strong>
          <strong class="mt-4 text-mainColor text-base font-semibold text-right leading-[18px]">{{ cartStore.total.toFixed(2) }}€</strong>
        </div>
      </div>
      <div v-else class="flex items-center justify-center h-full">
        <strong class="text-mainColor text-lg text-center font-semibold">Der Warenkorb <br/> ist leer</strong>
      </div>
    </div>

    <div class="w-full mb-10">
      <div v-if="cartStore.items.length > 0">
      <button @click="orderNow" class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">JETZT BESTELLEN</button>
      </div>
      <div v-else>
        <button class="my-4 w-full h-[40px] bg-gray-500 rounded-[20px] text-white text-sm leading-[21px] font-semibold">JETZT BESTELLEN</button>
      </div>
      <button @click="close" class="w-full h-[40px] text-mainColor text-opacity-50 rounded-[20px] text-sm leading-[21px] font-semibold">ABBRECHEN</button>
    </div>

  </div>
</template>
