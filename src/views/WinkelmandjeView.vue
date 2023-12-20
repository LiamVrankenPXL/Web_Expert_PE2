<script>
export default {
  computed: {
    winkelmandje() {
      return this.$root.winkelmandje; // Access the reactive winkelmandje
    },
  },
  methods: {
    calculateSubtotal() {
      return this.winkelmandje.reduce((total, product) => total + product.price, 0);
    },
    calculateBtw() {
      const subtotal = this.calculateSubtotal();
      return subtotal * 0.21; // Assuming 21% BTW
    },
    calculateTotal() {
      const subtotal = this.calculateSubtotal();
      const btw = this.calculateBtw();
      return subtotal + btw;
    },
    handlePayment() {
      console.log('Payment successful!');
      // You can clear the shopping cart or redirect to a thank you page, etc.
    },
  },
};
</script>

<template>
  <div class="winkelmandje">
    <div class="winkelmandje__product__sectie">
      <h2>Producten in winkelmandje</h2>
      <ul>
        <li v-for="(product, index) in winkelmandje" :key="index">
          {{ product.name }} - €{{ product.price.toFixed(2) }}
        </li>
      </ul>
    </div>

    <div class="winkelmandje__product__checkout">
      <h2>Betalingen Totaal</h2>
      <ul>
        <li>Subtotaal: €{{ calculateSubtotal().toFixed(2) }}</li>
        <li>BTW (21%): €{{ calculateBtw().toFixed(2) }}</li>
        <li><strong>Totaal: €{{ calculateTotal().toFixed(2) }}</strong></li>
      </ul>
      <button @click="handlePayment">Betaal</button>
    </div>
  </div>
</template>

