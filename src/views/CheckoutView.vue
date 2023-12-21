<script>
export default {
  data() {
    return {
      naam: '',
      straat: '',
      nummer: '',
      stad: '',
      postcode: '',
      facturatieVerschillend: false,
      facturatieStraat: '',
      facturatieNummer: '',
      totalBtw: '0',
      totalWithBtw: '0',
    };
  },

  computed: {
    winkelmandjeItems() {
      return this.$root.winkelmandje.map(product => ({
        afbeelding: product.afbeelding,
        naam: product.name,
        aantal: product.quantity,
      }));
    },
  },
};
</script>


<template>
  <h1>Checkout</h1>
  <div class="checkout__view">
    <form class="checkout__view__links">
      <h2>Checkout</h2>
      <div class="input-group">
        <label for="naam">Naam:</label>
        <input type="text" id="naam" v-model="naam" required />
      </div>

      <div class="flex-input-group">
        <div class="input-group">
          <label for="straat">Straat:</label>
          <input type="text" id="straat" v-model="straat" />
        </div>
        <div class="input-group small">
          <label for="nummer">Nummer:</label>
          <input type="text" id="nummer" v-model="nummer" required />
        </div>
      </div>

      <div class="input-group">
        <label for="stad">Stad:</label>
        <input type="text" id="stad" v-model="stad" required />
      </div>

      <div class="input-group">
        <label for="postcode">Postcode:</label>
        <input type="text" id="postcode" v-model="postcode" required />
      </div>

      <div class="input-group">
        <label for="facturatieCheckbox">Facturatiegegevens verschillend?</label>
        <input type="checkbox" id="facturatieCheckbox" v-model="facturatieVerschillend" />
      </div>

      <div v-if="facturatieVerschillend" class="facturatie-form">
        <div class="flex-input-group">
          <div class="input-group">
            <label for="facturatieStraat">Facturatie Straat:</label>
            <input type="text" id="facturatieStraat" v-model="facturatieStraat" required />
          </div>
          <div class="input-group small">
            <label for="facturatieNummer">Facturatie BTW:</label>
            <input type="text" id="facturatieNummer" v-model="facturatieNummer" required />
          </div>
        </div>
      </div>
      <button type="submit">Bevestig Bestelling</button>
    </form>

    <!--    Producten-->
    <!-- Producten -->
    <div class="winkelmandje__producten__rechts">
      <h2>Winkelmandje Items</h2>
      <div v-for="(item, index) in winkelmandjeItems" :key="index" class="winkelmandje__item">
        <img :src="item.afbeelding" :alt="item.naam">
        <div class="product__details">
          <p>{{ item.naam }}</p>
          <p>Aantal: {{ item.aantal }}</p>
        </div>
      </div>
      <div class="winkelmandje__producten__prijs">
        <p>Totaal btw: € {{ totalBtw }}</p>
        <p>Totaal met btw: € {{ totalWithBtw }}</p>
      </div>
    </div>
  </div>
</template>