<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="searchResultsTitle">
          <h1>Todas las propiedades</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PropertyCard v-for="(house, idx) in houses" :key="idx" :house="house" />
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
  name: 'SearchPage',
  components: {
    PropertyCard
  },
  data () {
    return {
      houses: []
    }
  },
  async mounted () {
    const response = await this.$axios.get('/property')
    this.houses = response.data
  }
}
</script>

<style scoped>
.searchResultsTitle {
  padding: 25px;
  background-image: url('@/assets/images/search-results-header.jpg');
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
