<template>
  <v-row>
    <v-col>
      <PropertyManager />
    </v-col>
  </v-row>
</template>

<script>
import PropertyManager from '../../components/PropertyManager.vue'
export default {
  name: 'PropertyEdit',
  components: {
    PropertyManager
  },
  layout: 'dashboardlayout'
}
</script>
