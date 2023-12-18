<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<template>
  <div class="card__layout">
    <div v-for="item in products" :key="item.id" class="card">
      <img :src="item.afbeelding" :alt="item.titel" class="card__image">
      <div class="card__content">
        <h2 class="card__title">{{ item.titel }}</h2>
        <p class="card__description">{{ item.omschrijving }}</p>
      </div>
      <div class="card__details">v
        <p class="card__price">{{ '€' + item.prijs.toFixed(2) }}</p>
        <button class="card__button">Bekijk meer</button>
      </div>
    </div>
  </div>
</template>