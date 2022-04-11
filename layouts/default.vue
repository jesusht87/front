<template>
  <v-app>
    <NavBar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/FooterCard.vue'

export default {
  name: 'DefaultLayout',
  components: { NavBar, Footer },
  data () {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'RealEstateApp',
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>
