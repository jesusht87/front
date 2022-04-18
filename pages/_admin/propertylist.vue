<template>
  <v-row>
    <v-col>
      <PropertyList />
    </v-col>
  </v-row>
</template>

<script>
import PropertyList from '../../components/PropertyList.vue'
export default {
  name: 'PropertyListPage',
  components: {
    PropertyList
  },
  layout: 'dashboardlayout'
}
</script>
