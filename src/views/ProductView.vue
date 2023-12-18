<script>
import producten from '../../producten.json';

export default {
  data() {
    return {
      producten: [],
      filteredProducts: [],
    };
  },
  computed: {
    dureProducts() {
      return this.producten.artikelen.filter(product => product.prijs > 20);
    },
    goedkopeProducts() {
      return this.producten.artikelen.filter(product => product.prijs < 20);
    },
    gemiddeldeProducts() {
      return this.producten.artikelen.filter(product => product.prijs >= 15 && product.prijs <= 25);
    },
  },

  mounted() {
    this.producten = producten;
    this.filteredProducts = this.producten.artikelen;
  },
}
</script>

<template>
  <body  id="achtergrond2">
    <div class="product__header">
      <div class="product__top">
        <h1>Sticker store</h1>
        <p>Onze winkel heeft een variatie aan verschillende soorten stickers. Voor iedereen zit er wel iets tussen.</p>
      </div>
    </div>

    <!--search-->
    <div class="product__search">
      <div class="product__layout">
        <div class="product__search__bar">
          <input type="text" placeholder="Zoeken...">
          <button><i class="fas fa-search"></i></button>
        </div>
        <!-- filteropties -->
        <div class="product__filter">
          <span class="filter-option" @click="filteredProducts = dureProducts">Dure producten</span>
          <span class="filter-option" @click="filteredProducts = goedkopeProducts">Goedkope producten</span>
          <span class="filter-option" @click="filteredProducts = gemiddeldeProducts">Gemiddelde producten</span>
        </div>
      </div>
    </div>


    <!--products-->
    <div class="card__layout">
      <div v-for="product in filteredProducts" :key="product.id" class="card">
        <img :src="product.afbeelding" :alt="product.titel" class="card__image">
        <div class="card__content">
          <h2 class="card__title">{{ product.titel }}</h2>
          <p class="card__description">{{ product.omschrijving }}</p>
        </div>
        <div class="card__details">
          <p class="card__price">{{ '€' + product.prijs.toFixed(2) }}</p>
          <button class="card__button">Bekijk meer</button>
        </div>
      </div>
    </div>

    <!--pagination-->
    <div class="pagination">
      <ul>
        <li><a href="#" class="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
      </ul>
    </div>
  </body>
</template>

