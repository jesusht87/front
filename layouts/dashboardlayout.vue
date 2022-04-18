<template>
  <v-app>
    <v-main>
      <div class="topadminbar">
        <h4>Bienvenid@ al Panel de Administración</h4>
      </div>
      <v-row>
        <v-col cols="2">
          <DashboardLeftMenu />
        </v-col>
        <v-col cols="10">
          <Nuxt />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import DashboardLeftMenu from '../components/DashboardLeftMenu.vue'
export default {
  name: 'DashboardLayout',
  components: {
    DashboardLeftMenu
  },
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

<style scoped>
.topadminbar {
  line-height: 25px;
  color: white;
  background-color: cornflowerblue;
  text-align: center;
  }
</style>
