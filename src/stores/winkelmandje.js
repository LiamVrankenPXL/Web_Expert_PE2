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
            { id: 1, username: 'voorbeeld@info.com', password: '123', name: 'John Doe', street: 'Main Street', streetNumber: '123', city: 'Cityville', postcode: '12345' },
            { id: 2, username: 'ander@example.com', password: '456', name: 'Jane Doe', street: 'Second Street', streetNumber: '456', city: 'Townsville', postcode: '67890' },
            { id: 3, username: 'nogeen@example.com', password: '789', name: 'Bob Johnson', street: 'Third Street', streetNumber: '789', city: 'Villagetown', postcode: '54321' },
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
