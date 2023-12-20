<script>
import producten from '../../producten.json';
import PopupComponent from "@/components/PopupComponent.vue";

export default {
  data() {
    return {
      product: {},
      quantity: 1,
      showPopup: false,
      popupMessage: '',
    };
  },
  components: {
    PopupComponent,
  },
  methods: {
    addToCart() {
      const addedProduct = {
        id: this.product.id,
        quantity: parseInt(this.quantity, 10),
        price: this.product.prijs,
        name: this.product.titel,
        afbeelding: this.product.afbeelding,
        omschrijving: this.product.omschrijving,
        stock: this.product.hoeveelheid_voorraad,
        btw: this.product.btw_tarief,
      };


      this.$root.winkelmandje.push(addedProduct);

      // Laat de popup zien met het juiste bericht
      this.showPopup = true;
      this.popupMessage = `Product "${this.product.titel}" is toegevoegd aan je winkelmandje.`;
    },
    closePopup() {
      this.showPopup = false;
      this.popupMessage = '';
    },
    goToCart() {
      this.closePopup();
    },
    goToProducts() {
      this.closePopup();
    },
    redirectToLogin() {
      this.$router.push('/login');
    },
  },
  computed: {
    loggedInUser() {
      return this.$root.loggedInUser || null;
    },
  },
  mounted() {
    const productId = parseInt(this.$route.params.id);
    this.product = producten.artikelen.find(product => product.id === productId);
  },
};
</script>




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
          <h2>{{ '€' + (product.prijs ? product.prijs.toFixed(2) : 'Niet aanwezig') }}</h2>
        </div>

        <div class="detail__layout__tekst__buttons">
          <button type="button"><i class="fa-regular fa-heart"></i></button>
          <button v-if="loggedInUser" type="button" @click="addToCart">Add to cart</button>
          <button v-else type="button" @click="redirectToLogin">Log in</button>
          <select v-if="product.hoeveelheid_voorraad > 0" v-model="quantity" name="quantity" class="quantityDropdown">
            <option v-for="n in Math.min(product.hoeveelheid_voorraad, 5)" :value="n" :key="n">{{ n }}</option>
          </select>
          <button v-if="product.hoeveelheid_voorraad > 0" type="button" @click="addToCart">Add to cart</button>
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

    <!-- Voeg de popup toe -->
    <PopupComponent
        v-if="showPopup"
        :message="popupMessage"
        :showGoToCart="product.hoeveelheid_voorraad > 0"
        :showGoToProducts="true"
        @onClose="closePopup"
        @goToCart="goToCart"
        @goToProducts="goToProducts"
    />
  </div>
</template>
