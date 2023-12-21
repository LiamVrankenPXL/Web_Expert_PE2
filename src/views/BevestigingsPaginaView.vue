<script>
export default {
  data() {
    return {
      titel: 'Bevestiging Bestelling',
      aantal: 'Aantal: ',
      prijsPerStuk: 'Prijs per stuk: € ',
      totaalPrijs: 'Totaal prijs: € ',
      btw: 'BTW: € ',
      totaalInclusiefBtw: 'Totaal Inclusief btw: € ',
      totaalPrijsZonderBtw: 'Totaalprijs zonder BTW: € ',
      totalePrijsMetBtw: 'Volledige totale prijs met BTW: € '
    };
  },
  computed: {
    winkelmandje() {
      return this.$root.winkelmandje;
    },
  },
  methods: {
    calculateTotalWithoutBtw() {
      return this.winkelmandje.reduce((total, product) => total + (product.price * product.quantity), 0);
    },
    calculateTotalWithBtw() {
      return this.winkelmandje.reduce((total, product) => {
        const totalPrice = product.price * product.quantity;
        const totalBtw = totalPrice * (product.btw / 100);
        return total + totalPrice + totalBtw;
      }, 0);
    },
  },
};
</script>


<template>
  <div class="bevestigings-pagina">
    <h1>{{ titel }}</h1>
    <div class="bestelde-artikelen">
      <div v-for="(product, index) in winkelmandje" :key="index" class="besteld-artikel">
        <img :src="product.afbeelding" :alt="product.name">
        <div class="product__details">
          <p>{{ product.name }}</p>
          <p>{{ aantal }} {{ product.quantity }}</p>
          <p>{{ prijsPerStuk }} {{ product.price.toFixed(2) }}</p>
          <p>{{ totaalPrijs }} {{ (product.price * product.quantity).toFixed(2) }}</p>
          <p>{{ btw }} {{ (product.price * product.quantity * (product.btw / 100)).toFixed(2) }}</p>
          <p class="totaal-prijs-met-btw">{{ totaalInclusiefBtw }} {{ ((product.price * product.quantity) + (product.price * product.quantity * (product.btw / 100))).toFixed(2) }}</p>
        </div>
      </div>
    </div>
    <!-- Totaalprijs zonder BTW -->
    <p class="volledige-totale-prijs">{{ totaalPrijsZonderBtw }} {{ calculateTotalWithoutBtw().toFixed(2) }}</p>
    <!-- Totaalprijs met BTW -->
    <p class="volledige-totale-prijs">{{ totalePrijsMetBtw }} {{ calculateTotalWithBtw().toFixed(2) }}</p>
  </div>
</template>


<style>
.bevestigings-pagina {
  padding: 20px;
}

.bestelde-artikelen {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.besteld-artikel {
  display: flex;
  margin: 25px;
}

.besteld-artikel img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.product__details {
  display: flex;
  flex-direction: column;
}


.volledige-totale-prijs {
  margin-top: 20px;
}
</style>