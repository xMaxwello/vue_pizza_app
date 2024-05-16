// Import markRaw from Vue
import { markRaw } from 'vue';
import {defineStore} from "pinia";
import CartBottomSheet from "../components/bottomSheet/bottomSheetItems/cartBottomSheet.vue";

export const useBottomSheetStore = defineStore('bottomSheet', {
    state: () => ({
        isVisible: false,
        contentComponent: markRaw(CartBottomSheet),
    }),
    actions: {
        show() {
            console.log("Store action 'show' called");
            this.isVisible = true;
        },
        hide() {
            console.log("Store action 'hide' called");
            this.isVisible = false;
        }
    }
});
