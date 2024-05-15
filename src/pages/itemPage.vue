<script setup lang="ts">
import {computed, ref} from 'vue';
import itemCard from "../components/cards/itemCard.vue";
import drinkCard from "../components/cards/drinkCard.vue";
import bottomSheet from "../components/bottomSheet/bottomSheetComponent.vue";
import {useMenuStore} from "../stores/menuStore.ts";
import {useRoute} from "vue-router";
import router from "../router";

const route = useRoute();
const menuStore = useMenuStore();

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

const showBottomSheet = ref(false);

const handlePaymentClick = () => {
  showBottomSheet.value = true;
};

const totalItemPrice = ref(0);
const totalDrinkPrice = ref(0);

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
  console.log('Recalculating total:', totalItemPrice.value, totalDrinkPrice.value);
  return totalItemPrice.value + totalDrinkPrice.value;
});

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
      <itemCard :items="items" :initialIndex="initialIndex" @updateItemPrice="handleItemPriceUpdate" class="flex-none"/>
    </div>
    <h2 class="mt-5 text-mainColor text-xs font-semibold">Getränke</h2>
    <div class="my-4 flex space-x-3 overflow-y-auto scrollbar-none">
      <drinkCard v-for="item in drinks" :key="item.id" :item="item" @updateDrinkPrice="handleDrinkPriceUpdate" class="flex-none"/>
    </div>
    <div class="mt-4 border-b-2 border-b-gray-400 border-opacity-50"></div>
    <strong class="mt-4 text-mainColor text-xs font-semibold text-right leading-[18px]">Gesamt (inkl. MwSt.): {{ totalPrice.toFixed(2) }}€</strong>
    <button @click="handlePaymentClick" class="my-4 w-full h-[40px] bg-price rounded-[20px] text-white text-sm leading-[21px] font-semibold">ZUM WARENKORB HINZUFÜGEN</button>
    <bottomSheet v-if="showBottomSheet" :onClose="() => showBottomSheet = false" />
  </div>
</template>
