<template>
  <v-card
    class="ma-10"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>¿Necesitas algo especial?</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      BÚSQUEDA PERSONALIZADA
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Si no encuentras lo que buscas, cóntáctanos y te ayudamos.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        to="contact"
      >
        Contactar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
