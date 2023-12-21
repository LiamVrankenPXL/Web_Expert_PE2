<script>
export default {
  data() {
    return {
      logoSrcNav: '/src/assets/images/logo.png',
      logoAltNav: "Logo Visionary_Visuals",
      productNaamNav: "Product",
      homeNaamNav: "Home",
    };
  },
};
</script>

<template>
  <!--navigatie-->
  <nav class="main-nav">
    <div class="brand">
      <router-link to="/"><img :src="logoSrcNav" :alt="logoAltNav"></router-link>
      <i class="fas fa-bars toggle-icon"></i>
    </div>
    <router-link to="/products" class="nav-item router-link-active">{{ productNaamNav }}</router-link>
    <router-link to="/" class="nav-item router-link-active">{{ homeNaamNav }}</router-link>
    <router-link to="winkelmandje" class="nav-item"><i class="fa-solid fa-cart-shopping"></i></router-link>
    <router-link to="login" class="nav-item"><i class="fa-solid fa-user"></i></router-link>
  </nav>
</template>
