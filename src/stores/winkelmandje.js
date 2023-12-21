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





export const useGebruikers = defineStore('gebruikers', {
    state: () => ({
        users: [
            { id: 1, username: 'voorbeeld@info.com', password: '123', address: 'Straat 123, Stad' },
        ],
        loggedInUser: null,
    }),
    actions: {
        login(username, password) {
            const user = this.users.find(u => u.username === username && u.password === password);
            if (user) {
                this.loggedInUser = user;
                console.log(`Aangemeld als ${user.username}`);
                return true;
            } else {
                console.log('Onjuiste gebruikersnaam of wachtwoord');
                return false;
            }
        },
        logout() {
            console.log(`Afgemeld: ${this.loggedInUser ? this.loggedInUser.username : 'Geen gebruiker aangemeld'}`);
            this.loggedInUser = null;
        },
    },
});
