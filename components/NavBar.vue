<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-toolbar>
      <img
        class="mr-3"
        :src="require('../assets/images/navbar-logo.png')"
        height="100px"
      >
      <v-spacer />
      <v-btn
        to="/"
        text
      >
        Portada
      </v-btn>
      <v-btn to="categories" text>
        Categorías
      </v-btn>
      <v-btn
        to="about"
        text
      >
        Sobre Nosotros
      </v-btn>
      <v-btn
        to="contact"
        text
      >
        Contacto
      </v-btn>
      <v-btn
        to="account"
        text
      >
        Mi Cuenta
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
</style>
