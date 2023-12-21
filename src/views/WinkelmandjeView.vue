<script>
export default {
  data() {
    return {
      aantalArtikelenInWinkelmandje: 0,
    };
  },

  computed: {
    winkelmandje() {
      return this.$root.winkelmandje;
    },
  },
  methods: {

    increaseQuantity(product) {
      if (product.stock > product.quantity) {
        product.quantity++;
        this.updateAantalArtikelen();
        this.$forceUpdate();
      } else {
        console.log('Niet genoeg voorraad beschikbaar.');
      }
    },
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
        this.updateAantalArtikelen();
        this.$forceUpdate();
      }
    },
    updateAantalArtikelen() {
      this.aantalArtikelenInWinkelmandje = this.winkelmandje.reduce((total, product) => total + product.quantity, 0);
    },
    calculateSubtotal() {
      return this.winkelmandje.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    calculateBtw() {
      const subtotal = this.calculateSubtotal();
      return subtotal * 0.21;
    },
    calculateTotal() {
      const subtotal = this.calculateSubtotal();
      const btw = this.calculateBtw();
      return subtotal + btw;
    },
    handlePayment() {
      console.log('Payment successful!');
    },
    removeProduct(product) {
      const index = this.winkelmandje.indexOf(product);
      if (index !== -1) {
        this.winkelmandje.splice(index, 1);
        this.updateAantalArtikelen();
        this.$forceUpdate();
      } else {
        console.log('Product not found in winkelmandje.');
      }
    },
  },
};
</script>


<template>
  <div class="winkelmandje">
    <div class="winkelmandje__product__sectie">
      <h2>Winkelmandje</h2>
      <p v-if="winkelmandje.length === 0">Geen artikelen in het winkelmandje</p>
      <div v-for="(product, index) in winkelmandje" :key="index" class="winkelmandje__product__sectie__artikelen">
        <img :src="product.afbeelding" :alt="product.name">
        <div class="deel__1">
          <h2>{{ product.name}}</h2>
          <p>{{ product.omschrijving }}</p>
          <button class="aftellen" @click="decreaseQuantity(product)">-</button>
          {{ product.quantity }}
          <button class="optellen" @click="increaseQuantity(product)">+</button>
          <button class="verwijder" @click="removeProduct(product)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
        <div class="deel__2">
          <p>€{{ product.price.toFixed(2) }}</p>
          <p>btw: {{ product.btw }}</p>
          <p>x {{ product.quantity }}</p>
          <p class="break"></p>
          <p class="totaal" ref="totaalPrijs">Totaal: €{{ ((product.price * product.quantity) + ((product.price * product.quantity) * (product.btw / 100))).toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <div class="winkelmandje__product__checkout">
      <div class="border">
        <h2>Betalingen Totaal</h2>
        <ul>
          <li>Subtotaal: €{{ calculateSubtotal().toFixed(2) }}</li>
          <li>BTW (21%): €{{ calculateBtw().toFixed(2) }}</li>
          <li><strong>Totaal: €{{ calculateTotal().toFixed(2) }}</strong></li>
        </ul>
        <router-link :to="{ name: 'checkout' }">
          <button @click="handlePayment">Betaal</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

