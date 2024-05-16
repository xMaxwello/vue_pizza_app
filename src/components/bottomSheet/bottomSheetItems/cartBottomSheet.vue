<script setup lang="ts">
import { useCartStore } from '../../../stores/cartStore.ts';

const cartStore = useCartStore();
const emit = defineEmits(['close']);

const orderNow = () => {
};

const close = () => {
  emit('close');
};
</script>

<template>
  <div>
    <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between">
      <img :src="item.image" alt="product image" class="w-16 h-16 object-cover rounded">
      <div>
        <div>{{ item.name }}</div>
        <div>{{ item.quantity }} x {{ item.price.toFixed(2) }}€</div>
      </div>
      <button @click="cartStore.removeFromCart(item.id)">Remove</button>
    </div>
    <div class="flex justify-between">
      <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">Gesamtsumme</strong>
      <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">{{ cartStore.subtotal.toFixed(2) }}€</strong>
    </div>
    <div class="flex justify-between">
      <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">MwSt.</strong>
      <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">{{ cartStore.tax.toFixed(2) }}€</strong>
    </div>
    <div class="mt-4 border-b-2 border-b-gray-400 border-opacity-70"></div>
    <div class="flex justify-between">
      <strong class="mt-4 text-mainColor text-opacity-50 text-xs font-semibold text-right leading-[18px]">Total</strong>
      <strong class="mt-4 text-mainColor text-base font-semibold text-right leading-[18px]">{{ cartStore.total.toFixed(2) }}€</strong>
    </div>
  </div>

  <div>
    <button @click="orderNow" class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">JETZT BESTELLEN</button>
    <button @click="close" class="mb-4 w-full h-[40px] text-mainColor text-opacity-50 rounded-[20px] text-sm leading-[21px] font-semibold">ABBRECHEN</button>
  </div>
</template>
