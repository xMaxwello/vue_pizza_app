<script setup lang="ts">
import {computed, ref, defineProps, Ref} from 'vue';
import itemCard from "../components/cards/itemCard.vue";
import drinkCard from "../components/cards/drinkCard.vue";
import { useMenuStore } from "../stores/menuStore.ts";
import { useRoute, useRouter } from "vue-router";
import { useBottomSheetStore } from "../stores/bottomSheetStore.ts";
import { useCartStore } from "../stores/cartStore.ts";
import {cartItem} from "../data/cartItem.ts";
import CartBottomSheet from "../components/bottomSheet/bottomSheetItems/cartBottomSheet.vue";

const route = useRoute();
const router = useRouter();
const menuStore = useMenuStore();
const cartStore = useCartStore();
const bottomSheet = useBottomSheetStore();

const items = computed(() => {
  const slug = route.params.slug;
  const category = menuStore.menuItems.find(cat => cat.items.some(item => item.url === slug));
  return category ? category.items : [];
});

const initialIndex = computed(() => {
  const slug = route.params.slug;
  return items.value.findIndex(item => item.url === slug);
});

const props = defineProps<{
  category: string;
}>();

const navigateToHome = () => router.push({ name: 'home' });
const drinks = menuStore.menuItems.find(category => category.category === "Drinks")?.items;

const totalItemPrice = ref(0);
const totalDrinkPrice = ref(0);
const selectedItems: Ref<cartItem[]> = ref([]);

const handleItemPriceUpdate = ({ price, count }) => {
  totalItemPrice.value = price * count;
};

const handleDrinkPriceUpdate = ({ price, add }) => {
  if (add) {
    totalDrinkPrice.value += price;
  } else {
    totalDrinkPrice.value -= price;
  }
};

const totalPrice = computed(() => {
  return totalItemPrice.value + totalDrinkPrice.value;
});

const addItemToSelection = (itemDetails) => {
  console.log('Adding item to selection:', itemDetails);
  const existingItem = selectedItems.value.find(item => item.id === itemDetails.id && item.size === itemDetails.size);
  if (existingItem) {
    existingItem.quantity += itemDetails.quantity;
  } else {
    selectedItems.value.push(itemDetails);
  }
};

const addDrinkToSelection = (drinkDetails) => {
  console.log('Adding drink to selection:', drinkDetails);
  const existingDrink = selectedItems.value.find(drink => drink.id === drinkDetails.id);
  if (existingDrink) {
    existingDrink.quantity += 1;
  } else {
    selectedItems.value.push(drinkDetails);
  }
};

const addItemToCart = () => {
  console.log('Items being added to cart:', selectedItems.value);
  selectedItems.value.forEach(item => cartStore.addToCart(item));
  console.log('Cart after adding:', JSON.stringify(cartStore.items));
  selectedItems.value = [];
  bottomSheet.open(CartBottomSheet);
};
</script>

<template>
  <div class="flex flex-col px-5">
    <div class="pt-4 flex justify-between">
      <button @click="navigateToHome" class="flex flex-row">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z" fill="#001427"/>
          </g>
        </svg>
        Zurück
      </button>
      <span>{{ props.category.charAt(0).toUpperCase() + props.category.slice(1) }}</span>
    </div>
    <div class="my-4 flex overflow-y-auto scrollbar-none">
      <itemCard :items="items" :initialIndex="initialIndex" @updateItemPrice="handleItemPriceUpdate" @selectItem="addItemToSelection" class="flex-none"/>
    </div>
    <h2 class="mt-5 text-mainColor text-xs font-semibold">Getränke</h2>
    <div class="my-4 flex space-x-3 overflow-y-auto scrollbar-none">
      <drinkCard v-for="item in drinks" :key="item.id" :item="item" @updateDrinkPrice="handleDrinkPriceUpdate" @selectDrink="addDrinkToSelection" class="flex-none"/>
    </div>
    <div class="mt-4 border-b-2 border-b-gray-400 border-opacity-50"></div>
    <strong class="mt-4 text-mainColor text-xs font-semibold text-right leading-[18px]">Gesamt (inkl. MwSt.): {{ totalPrice.toFixed(2) }}€</strong>
    <button @click="addItemToCart()" class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">ZUM WARENKORB HINZUFÜGEN</button>
  </div>
</template>
