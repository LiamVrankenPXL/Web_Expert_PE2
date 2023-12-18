<script>
import producten from '../../producten.json';
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  data() {
    return {
      producten: [],
      filteredProducts: [],
      zoektekst: '',
      itemsPerPage: 8,
      currentPage: 1,
    };
  },
  components: {
    ProductCardComponent,
  },

  computed: {
    totalProducts() {
      return this.filteredProducts.length;
    },
    totalPages() {
      return Math.ceil(this.totalProducts / this.itemsPerPage);
    },
    displayedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end);
    },

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

  methods: {
    filterProducten() {
      this.filteredProducts = this.producten.artikelen.filter(product =>
          product.titel.toLowerCase().includes(this.zoektekst.toLowerCase())
      );
      this.currentPage = 1;
    },
    changePage(page) {
      this.currentPage = page;
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
        <h1>Kristallen shop</h1>
        <p>Onze winkel heeft een variatie aan verschillende soorten kristallen. Voor iedereen zit er wel een steentje tussen.</p>
      </div>
    </div>

    <!--search-->
    <div class="product__search">
      <div class="product__layout">
        <div class="product__search__bar">
          <input type="text" placeholder="Zoeken..." v-model="zoektekst" @input="filterProducten">
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


    <ProductCardComponent
        :products="displayedProducts" />

    <!--pagination-->
    <div class="pagination" v-if="totalPages > 1">
      <ul>
        <li v-for="page in totalPages" :key="page">
          <a href="#" :class="{ active: currentPage === page }" @click="changePage(page)">
            {{ page }}
          </a>
        </li>
      </ul>
    </div>
  </body>
</template>

