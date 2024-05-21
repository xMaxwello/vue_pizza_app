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

///TODO: Button grau anzeigen lassen wenn nichts im cartStore gespeichert wird
</script>

<template>
  <div class="flex flex-col justify-between h-[652px]">

    <div>
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

    <div class="w-full mb-10">
      <button @click="orderNow" class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">JETZT BESTELLEN</button>
      <button @click="close" class="w-full h-[40px] text-mainColor text-opacity-50 rounded-[20px] text-sm leading-[21px] font-semibold">ABBRECHEN</button>
    </div>

  </div>
</template>
