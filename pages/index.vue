<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center pa-0">
        <HomeHeroImage />
        <SearchHomeArea />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeHeroImage from '../components/HomeHeroImage.vue'
import SearchHomeArea from '../components/SearchHomeArea.vue'
export default {
  name: 'IndexPage',
  components: { HomeHeroImage, SearchHomeArea }
}
</script>
