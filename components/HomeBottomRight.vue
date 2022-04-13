<template>
  <v-card
    class="ma-10"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('@/assets/images/new-homes.jpg')"
    >
      <v-card-title>Novedades</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      PROPIEDADES RECIÉN LLEGADAS
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Lo último en nuestro catálogo.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        to="promo"
      >
        Ver
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
