import { defineStore } from 'pinia';
import { cartItem } from '../data/cartItem.ts';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as cartItem[],
    }),
    getters: {
        subtotal: (state) => state.items.reduce((acc, item) => acc + (item.price * item.quantity) / 1.19, 0),
        total: (state) => state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
    },
    actions: {
        addToCart(item: cartItem) {
            const existingItem = this.items.find(it => it.id === item.id && it.size === item.size);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.items.push(item);
            }
        },
        removeItem(id: number, size: string) {
            this.items = this.items.filter(item => item.id !== id || item.size !== size);
        },
        updateQuantity(id: number, size: string, quantity: number) {
            const item = this.items.find(it => it.id === id && it.size === size);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart() {
            this.items = [];
        },
        reorder(items: cartItem[]) {
            items.forEach(item => {
                this.addToCart(item);
            });
        },
    }
});
