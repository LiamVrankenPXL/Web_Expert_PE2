<script>
import producten from '../../producten.json';

export default {
  data() {
    return {
      product: [],
    };
  },
  mounted() {
    const productId = parseInt(this.$route.params.id);
    this.product = producten.artikelen.find(product => product.id === productId);
  },
};
</script>

<!-- ProductDetailView.vue -->
<template>
  <div v-if="product" class="detail">
    <div class="detail__layout">
      <div class="detail__layout__foto">
        <img :src="product.afbeelding" :alt="product.titel">
      </div>
      <div class="detail__layout__tekst">
        <div class="detail__layout__tekst__stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>(12 reviews)</p>
        </div>
        <div class="detail__layout__tekst__info">
          <h1>{{ product.titel }}</h1>
          <p>{{ product.omschrijving }}</p>
          <p class="aanwezigheid">{{ product.hoeveelheid_voorraad > 0 ? `Aanwezig` : `Niet meer beschikbaar` }}</p>
          <h2>{{ '€' + (product.prijs ? product.prijs.toFixed(2) : 'N/A') }}</h2>
        </div>

        <div class="detail__layout__tekst__buttons">
          <button type="button"><i class="fa-regular fa-heart"></i></button>
          <button type="button"><i class="fa-solid fa-cart-shopping"></i></button>
          <select name="quantity" class="quantityDropdown">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div class="detail__layout__tekst__options">
          <p>About</p>
          <p>Specs</p>
          <p>Reviews</p>
        </div>
        <div class="detail__layout__tekst__About">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at consequatur eius ex, facere facilis, incidunt inventore laudantium libero, nam perspiciatis quam quod ratione repellat similique. Accusamus aut dolores suscipit.</p>
        </div>
      </div>
    </div>
  </div>
</template>
