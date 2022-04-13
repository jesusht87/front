<template>
  <v-card
    class="ma-10"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('@/assets/images/promo-homes.png')"
    >
      <v-card-title>En Promoción</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      PROPIEDADES CON PRECIOS ESPECIALES
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Descubre las propiedades que se encuentran actualmente en promoción.</div>
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
