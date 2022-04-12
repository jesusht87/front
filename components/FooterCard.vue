<template>
  <v-footer dark padless>
    <v-row align-content="center">
      <v-img
        max-height="150"
        max-width="250"
        src="../assets/images/footer-logo.png"
      />
      <v-card flat tile class="white--text m" width="100%">
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
</template>

<script>
export default {
  name: 'FooterCard',
  data () {
    return {
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

<style lang="scss" scoped>
</style>
