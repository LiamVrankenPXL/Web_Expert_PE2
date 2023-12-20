<script>
export default {
  props: {
    message: String,
    showGoToCart: Boolean,
    showGoToProducts: Boolean,
    onGoToCart: Function,
    onGoToProducts: Function,
  },
  methods: {
    goToCart() {
      this.$router.push({ name: 'winkelmandje' });
    },
    goToProducts() {
      this.$router.push({ path: '/products' });
    }
  }
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


