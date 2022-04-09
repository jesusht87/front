<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar>
        <img
          class="mr-3"
          :src="require('../static/navbar-logo.png')"
          height="100px"
        >
        <v-spacer />
        <v-btn to="/" text>
          Portada
        </v-btn>
        <v-btn to="categories" text>
          Categorías
        </v-btn>
        <v-btn to="about" text>
          Sobre Nosotros
        </v-btn>
        <v-btn to="contact" text>
          Contacto
        </v-btn>
        <v-btn to="account" text>
          Mi Cuenta
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
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
