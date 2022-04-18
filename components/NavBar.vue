<template>
  <v-toolbar elevation="0" height="100" class="pb-2">
    <img
      class="mt-4"
      :src="require('@/assets/images/navbar-logo.png')"
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
      Mi Cuenta
    </v-btn>
    <v-btn
      to="loginPage"
      text
    >
      Login
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>
