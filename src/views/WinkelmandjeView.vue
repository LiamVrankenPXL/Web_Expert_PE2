<script>
export default {
  data() {
    return {
      winkelmandje: [], // Your shopping cart items will be stored here
    };
  },
  methods: {
    calculateSubtotal() {
      return this.winkelmandje.reduce((total, product) => total + product.prijs, 0);
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
    <div class="content-container">
      <div class="products-section">
        <h2>Producten in winkelmandje</h2>
        <ul>
          <li v-for="(product, index) in winkelmandje" :key="index">
            {{ product.naam }} - €{{ product.prijs.toFixed(2) }}
          </li>
        </ul>
      </div>

      <div class="checkout-section">
        <h2>Betalingen Totaal</h2>
        <ul>
          <li>Subtotaal: €{{ calculateSubtotal().toFixed(2) }}</li>
          <li>BTW (21%): €{{ calculateBtw().toFixed(2) }}</li>
          <li><strong>Totaal: €{{ calculateTotal().toFixed(2) }}</strong></li>
        </ul>
        <button @click="handlePayment">Betaal</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.winkelmandje {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 50px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.products-section {
  flex: 1;
}

.checkout-section {
  flex: 1;
  color: white;
}
</style>