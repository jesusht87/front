<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center pa-0">
        <HomeHeroImage />
        <SearchHomeArea />
      </v-col>
    </v-row>
    <v-row align="center">
      <HomeBottomLeft />
      <HomeBottomCenter />
      <HomeBottomRight />
    </v-row>
  </v-container>
</template>

<script>
import HomeHeroImage from '../components/HomeHeroImage.vue'
import SearchHomeArea from '../components/SearchHomeArea.vue'
import HomeBottomLeft from '../components/HomeBottomLeft.vue'
import HomeBottomRight from '../components/HomeBottomRight.vue'
import HomeBottomCenter from '../components/HomeBottomCenter.vue'
export default {
  name: 'IndexPage',
  components: { HomeHeroImage, SearchHomeArea, HomeBottomLeft, HomeBottomRight, HomeBottomCenter },
  layout: 'default'
}
</script>
