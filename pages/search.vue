<template>
  <v-container>
    <v-row>
      <v-col v-for="(house, idx) in houses" :key="idx">
        <PropertyCard :house="house" />
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

</style>
