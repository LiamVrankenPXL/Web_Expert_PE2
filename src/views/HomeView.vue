<script>
import producten from '../../producten.json';

export default {
  data() {
    return {
      producten: [],
      carouselProducten: [],
      currentIndex: 0,
    }
  },
  mounted() {
    this.producten = producten.artikelen;
    this.sortAndSetCarouselProducts();
  },
  methods: {
    sortAndSetCarouselProducts() {
      this.producten.sort((a, b) => b.voorraad - a.voorraad);
      this.carouselProducten = this.producten.slice(0, 5);
    },
    nextProduct() {
      // Ga naar het volgende product in de carrousel
      if (this.currentIndex < this.carouselProducten.length - 1) {
        this.currentIndex++;
      }
    },
    prevProduct() {
      // Ga naar het vorige product in de carrousel
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  }
}
</script>

<template>
  <!--head-->
  <div class="index__header">
    <div class="index__header__links">
      <h1>Ontdek Creatieve Expressie met Onze Unieke Sticker Collectie!</h1>
      <p>Verrijk je wereld met onze unieke stickers! Van speelse illustraties tot strakke ontwerpen, vind de perfecte toevoeging voor je laptop, waterfles of notitieboek. Ontdek jouw creativiteit met de betoverende collectie van positive vibes!</p>
      <button type="button">Shop nu!</button>
    </div>
    <div class="index__header__rechts">
      <img src="@/assets/images/Free_Round_Roll_Sticker_Mockup_1.png" alt="mock-up sticker rol">
    </div>
  </div>



  <!--in de kijker -->
  <div class="index__kijker">
    <div class="index__kijker__links">
      <img v-if="carouselProducten[currentIndex]" :src="carouselProducten[currentIndex].afbeelding" :alt="carouselProducten[currentIndex].titel">
      <button @click="prevProduct" :disabled="currentIndex === 0">Vorige</button>
      <button @click="nextProduct" :disabled="currentIndex === carouselProducten.length - 1">Volgende</button>
    </div>
    <div class="index__kijker__rechts">
      <p>Populaire producten</p>
      <h1 v-if="carouselProducten[currentIndex] && carouselProducten[currentIndex].titel">
        {{ carouselProducten[currentIndex].titel }}
      </h1>
      <p v-if="carouselProducten[currentIndex] && carouselProducten[currentIndex].omschrijving">
        {{ carouselProducten[currentIndex].omschrijving }}
      </p>
      <button type="button">Meer info</button>
    </div>
  </div>




  <!--    rotating cards-->
  <div class="index__card">
    <h1>Waarom voor ons kiezen?</h1>
    <div class="index__card__rotate">
      <div class="index__card__rotate__special" id="card__1">
        <h2>Kwaliteits volle stickers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, debitis doloribus earum eligendi eum illum saepe. A cumque cupiditate, eaque eligendi facere harum magni modi nisi numquam sed ut?</p>
      </div>
      <div class="index__card__rotate__special" id="card__2">
        <h2>Duurzaam en milieu vriendelijk</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, debitis doloribus earum eligendi eum illum saepe. A cumque cupiditate, eaque eligendi facere harum magni modi nisi numquam sed ut?</p>
      </div>
      <div class="index__card__rotate__special" id="card__3">
        <h2>hoge resolutie foto's</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, debitis doloribus earum eligendi eum illum saepe. A cumque cupiditate, eaque eligendi facere harum magni modi nisi numquam sed ut?</p>
      </div>
    </div>
  </div>

  <!--contact us -->
  <div class="index__contact">
    <div class="index__contact__links">
      <img src="@/assets/images/persoon_contact.png" alt="persoon">
    </div>
    <div class="index__contact__rechts">
      <h1>Contact ons nu!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consectetur consequuntur corporis delectus deserunt facere fuga ipsa labore maiores minus molestiae mollitia nam natus officiis omnis, praesentium sapiente sint!</p>
      <button type="button">Contacteer ons nu</button>
    </div>
  </div>
</template>