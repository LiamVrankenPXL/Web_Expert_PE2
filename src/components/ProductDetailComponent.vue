<script>
import { defineComponent } from "vue";
import { useStore } from "pinia";

export default defineComponent({
  props: {
    product: Object,
  },
  setup(props) {
    const store = useStore();

    const addToCart = () => {
      // Hier kun je de logica toevoegen om het product aan de winkelwagen toe te voegen
      console.log("Product toegevoegd aan winkelwagen:", props.product);
    };

    return { addToCart };
  },
});
</script>

<template>
  <div v-if="product">
    <div class="detail__layout__foto">
      <img :src="product.afbeelding" :alt="product.titel">
    </div>
    <div class="detail__layout__tekst">
      <div class="detail__layout__tekst__stars">
        <!-- Sterren en beoordelingen hier -->
      </div>
      <div class="detail__layout__tekst__info">
        <h1>{{ product.titel }}</h1>
        <p>{{ product.omschrijving }}</p>
        <p class="aanwezigheid">{{ product.hoeveelheid_voorraad > 0 ? 'Aanwezig' : 'Uitverkocht' }}</p>
        <h2>{{ '€' + product.prijs.toFixed(2) }}</h2>
      </div>

      <div class="detail__layout__tekst__buttons">
        <button type="button" @click="addToCart"><i class="fa-regular fa-heart"></i></button>
        <button type="button"><i class="fa-solid fa-cart-shopping"></i></button>
        <select name="quantity" class="quantityDropdown">
          <!-- Aantal dropdown-opties hier -->
        </select>
      </div>

      <div class="detail__layout__tekst__options">
        <a href="#">About</a>
        <a href="#">Specs</a>
        <a href="#">Reviews</a>
      </div>
      <div class="detail__layout__tekst__About">
        <p>{{ product.about }}</p>
      </div>
    </div>
  </div>
</template>


