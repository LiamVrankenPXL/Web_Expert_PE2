<script>
import producten from '@/producten.json';


export default {
  data() {
    return {
      producten: producten.artikelen,
      filteredProducts: [],
    }
  },

  methods: {
    filterDureProducts() {
      this.filteredProducts = this.producten.filter(product => {
        return product.filter === 'duur';
      });
    },

    filterGoedkoopProducts() {
      this.filteredProducts = this.producten.filter(product => {
        return product.filter === 'goedkoop';
      })
    }
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
          <span class="filter-option" @click="filterDureProducts">Dure producten</span>
          <span class="filter-option" @click="filterGoedkoopProducts">Dure producten</span>
        </div>
      </div>
    </div>


    <!--products-->
    <div class="card__layout">
      <div v-for="product in producten" :key="product.id" class="card">
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

