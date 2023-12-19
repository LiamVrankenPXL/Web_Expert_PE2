<script>
import producten from '../../producten.json';
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";

export default {
  components: {
    PopularProductsComponent
  },
  data() {
    return {
      producten: [],
      carouselProducten: [],
      currentIndex: 0,
    };
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
      if (this.currentIndex < this.carouselProducten.length - 1) {
        this.currentIndex++;
      }
    },
    prevProduct() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  }
};
</script>

<template>
  <!--head-->
  <div class="index__header">
    <div class="index__header__links">
      <h1>Ontdek onze collectie over verschillende soorten kristallen</h1>
      <p>Verken onze diverse kristalcollectie en ontdek de unieke schoonheid en energie van verschillende soorten kristallen. Van de betoverende amethist tot het heldere bergkristal, laat je inspireren door de pracht van deze bijzondere stenen.</p>
      <button type="button">Shop nu!</button>
    </div>
    <div class="index__header__rechts">
      <img src="@/assets/images/all_kinds_of_stones.png" alt="mock-up sticker rol">
    </div>
  </div>

  
  <!--in de kijker -->
  <PopularProductsComponent
      :carouselProducten="carouselProducten"
      :currentIndex="currentIndex"
      @prevProduct="prevProduct"
      @nextProduct="nextProduct"
  />

  <!--    rotating cards-->
  <div class="index__card">
    <h1>Waarom voor ons kiezen?</h1>
    <div class="index__card__rotate">
      <div class="index__card__rotate__special" id="card__1">
        <h2>Echte kristallen</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, debitis doloribus earum eligendi eum illum saepe. A cumque cupiditate, eaque eligendi facere harum magni modi nisi numquam sed ut?</p>
      </div>
      <div class="index__card__rotate__special" id="card__2">
        <h2>Duurzaam en milieu vriendelijk gemijnd</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, debitis doloribus earum eligendi eum illum saepe. A cumque cupiditate, eaque eligendi facere harum magni modi nisi numquam sed ut?</p>
      </div>
      <div class="index__card__rotate__special" id="card__3">
        <h2>De meest unieke kristallen vormen</h2>
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