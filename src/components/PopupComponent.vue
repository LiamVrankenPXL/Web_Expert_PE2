<script>
export default {
  props: {
    message: String,
    showGoToCart: Boolean,
    showGoToProducts: Boolean,
    onClose: Function,
    onGoToCart: Function,
    onGoToProducts: Function,
  },
  methods: {
    goToCart() {
      this.onGoToCart();
    },
    goToProducts() {
      this.onGoToProducts();
    },
  },
};
</script>

<template>
  <div class="popup">
    <div class="popup-content">
      <p>{{ message }}</p>
      <button @click="goToCart" v-if="showGoToCart">Naar winkelmandje</button>
      <button @click="goToProducts" v-if="showGoToProducts">Terug naar producten</button>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  z-index: 999;
}

.popup-content {
  text-align: center;
}
</style>