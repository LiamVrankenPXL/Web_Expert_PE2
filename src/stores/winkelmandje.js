import { defineStore } from 'pinia';

export const useWinkelmandje = defineStore('winkelmandje', {
    state: () => ({
        cart: [], // Your cart state
    }),
    actions: {
        addToCart(item) {
            this.cart.push(item);
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
    },
});