import { defineStore } from 'pinia';
import { Component, markRaw } from 'vue';

export const useBottomSheetStore = defineStore('bottomSheet', {
    state: () => ({
        isVisible: false,
        contentComponent: null as Component | null,
    }),
    actions: {
        open(component: Component) {
            this.contentComponent = markRaw(component);
            this.isVisible = true;
        },
        close() {
            this.isVisible = false;
            this.contentComponent = null;
        }
    }
});
