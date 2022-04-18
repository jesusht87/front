<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="searchResultsTitle">
          <h1>Solicitar Visita</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <PetitionNew />
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
import PetitionNew from '../components/PetitionNew.vue'
export default {
  name: 'ResultsPage',
  components: {
    PetitionNew
  },
  data () {
    return {
      title: ''
    }
  },
  async mounted () {
    console.log(this.$route.query.petitionId)
    const response = await this.$axios.get('/property/' + this.$route.query.petitionId)
    this.title = response.data[0].title
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
