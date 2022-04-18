<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="propertyResultsTitle">
          <h1>Todas las Propiedades</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(house, idx) in houses" :key="idx" cols="12" md="3">
        <PropertyCard :house="house" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PropertyCard from '../components/PropertyCard.vue'
export default {
  name: 'PropertyList',
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
.propertyResultsTitle {
  padding: 15px;
  line-height: 30px;
  text-align: right;
  background-image: url('@/assets/images/dash-titles.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
.propertyResults {
  padding: 10px;
}

</style>
