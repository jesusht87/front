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
          :src="require('../assets/images/navbar-logo.png')"
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
      dark
      padless
    >
      <v-row align-content="center">
        <v-img
          max-height="150"
          max-width="250"
          src="../assets/images/footer-logo.png"
        />
        <v-card
          flat
          tile
          class="white--text m"
          width="100%"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="white--text pt-0">
            Te acompañamos en todo el proceso, ¿hablamos?
          </v-card-text>

          <v-divider />

          <v-card-text class="white--text">
            © {{ new Date().getFullYear() }} — <strong>MyEstate Tenerife</strong>
          </v-card-text>
        </v-card>
      </v-row>
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
