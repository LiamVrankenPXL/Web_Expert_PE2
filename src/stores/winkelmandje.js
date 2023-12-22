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
            { id: 1, username: 'janedoe@gmail.com', password: '123', name: 'Ianthe de marie', street: 'Slagerstraat', streetNumber: '45', city: 'Hasselt', postcode: '3500' },
            { id: 2, username: 'johnsmith@yahoo.com', password: '456', name: 'Leen Hertogs', street: 'Witte torenwallstraat', streetNumber: '78', city: 'Bree', postcode: '3500' },
            { id: 3, username: 'bobjohnson@hotmail.com', password: '789', name: 'Robbe Brebels', street: 'Wakkerstraat', streetNumber: '910', city: 'Hasselt', postcode: '3960' },
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
