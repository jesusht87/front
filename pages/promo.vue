<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="searchResultsTitle">
          <h1>Propiedades en promoción... ¡aprovecha la oportunidad!</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(house, idx) in houses" :key="idx" cols="12" md="3">
        <PropertyCard :house="house" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="underSearch">
          <HomeBottomLeft />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PropertyCard from '../components/PropertyCard.vue'
export default {
  name: 'PromoPage',
  components: {
    PropertyCard
  },
  data () {
    return {
      houses: []
    }
  },
  async mounted () {
    const response = await this.$axios.get('/property/promo/')
    this.houses = response.data
  }
}
</script>

<style scoped>
.searchResultsTitle {
  padding: 25px;
  line-height: 125px;
  text-align: center;
  background-image: url('@/assets/images/promo-results-header.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
.searchResults {
  padding: 10px;
}
.underSearch {
  padding: 15px;
  margin-bottom: 20px;
  background-image: url('@/assets/images/hero-image-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}
</style>
