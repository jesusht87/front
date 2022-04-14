<template>
  <v-app>
    <NavBarDashboard />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import NavBarDashboard from '../components/NavBarDashboard.vue'

export default {
  name: 'DashLayout',
  components: { NavBarDashboard },
  data () {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'RealEstateApp'
    }
  }
}
</script>
