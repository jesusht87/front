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
      <v-col v-for="(house, idx) in houses" :key="idx" cols="12" md="3">
        <PropertyCard :house="house" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="typerowright">
          <div class="displayleft">
            <h1>A La Carta</h1>
            <p>En ocasiones, el hogar de tus sueños no aparece en una búsqueda... ¿te ayudamos a conseguirlo? Contacta con nosotros si no encuentras lo que buscas, y te ayudaremos a lograrlo.</p>
          </div>
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
  line-height: 125px;
  text-align: center;
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
.typerowright {
  background-image: url('@/assets/images/search-results-header.jpg');
  background-position: center;
  background-size: cover;
  height: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  width: 100%;
  padding: 10%;
  margin-bottom: 25px;
  margin-top: 50px;
}
.displayleft{
  color: white;
  text-align: left;
  width: 50%;
  background-color: rgba(192, 104, 0, 0.60);
  padding: 15px;
  border-radius: 5px;

}
</style>
