<script>
export default {
  data() {
    return {
      logoSrcNav: '/src/assets/images/logo.png',
      logoAltNav: "Logo Visionary_Visuals",
      productNaamNav: "Product",
      homeNaamNav: "Home",
      aantalArtikelenInWinkelmandje: 0,
    };
  },
  watch: {
    '$root.winkelmandje': {
      handler: 'updateAantalArtikelen',
      immediate: true,
    },
  },
  methods: {
    updateAantalArtikelen() {
      this.aantalArtikelenInWinkelmandje = this.$root.winkelmandje.reduce((total, product) => total + product.quantity, 0);
    },
  },
};
</script>

<template>
  <nav class="main-nav">
    <div class="brand">
      <img :src="logoSrcNav" :alt="logoAltNav">
      <i class="fas fa-bars toggle-icon"></i>
    </div>
    <router-link to="/products" class="nav-item router-link-active">{{ productNaamNav }}</router-link>
    <router-link to="/" class="nav-item router-link-active">{{ homeNaamNav }}</router-link>
    <router-link to="winkelmandje" class="nav-item">
      <i class="fa-solid fa-cart-shopping"></i>
      <div v-if="aantalArtikelenInWinkelmandje > 0" class="badge">
        {{ aantalArtikelenInWinkelmandje }}
      </div>
    </router-link>
    <router-link to="login" class="nav-item"><i class="fa-solid fa-user"></i></router-link>
  </nav>
</template>


<style>
.badge {
  background-color: red; /* Kies de gewenste achtergrondkleur */
  color: white; /* Kies de gewenste tekstkleur */
  border-radius: 50%; /* Maak een cirkel */
  padding: 5px;
  position: relative;
  top: 0.2em;
  right: 0.2em;
}
</style>