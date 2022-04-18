<template>
  <v-row>
    <v-col>
      <PropertyNew />
    </v-col>
  </v-row>
</template>

<script>
import PropertyNew from '../../components/PropertyNew.vue'
export default {
  name: 'PropertyNewPage',
  components: {
    PropertyNew
  },
  layout: 'dashboardlayout'
}
</script>
