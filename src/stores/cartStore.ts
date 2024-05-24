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
            const itemIndex = this.items.findIndex(item => item.id === id && item.size === size);
            if (itemIndex !== -1) {
                if (this.items[itemIndex].quantity > 1) {
                    this.items[itemIndex].quantity -= 1;
                } else {
                    this.items.splice(itemIndex, 1);
                }
            }
        },
        clearCart() {
            this.items = [];
        },
        reorder(items: cartItem[]) {
            items.forEach(reorderItem => {
                const existingItem = this.items.find(item => item.id === reorderItem.id && item.size === reorderItem.size);
                if (existingItem) {
                    existingItem.quantity += reorderItem.quantity;
                } else {
                    const newReorder = {...reorderItem};
                    this.addToCart(newReorder);
                }
            });
        }
    }
});
