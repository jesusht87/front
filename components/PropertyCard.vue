<template>
  <v-card
    :loading="cargando"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      />
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    />

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      />

      <div class="my-4 text-subtitle-1">
        {{ price }} • {{ municipality }}
      </div>

      <div>{{ description }}</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-text><b>Principales Características</b></v-card-text>

    <v-card-text>
      <ul>
        <li>Habitaciones: {{ rooms }}.</li>
        <li>Baños: {{ bathrooms }}.</li>
        <li>Metros útiles: {{ meters }} m2.</li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="visitar"
      >
        Solicitar Visita
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    characteristics: 1,
    slug: 'property',
    title: 'Casa Terrera en Arona',
    price: 157000,
    municipality: 'Arona',
    description: 'Aquí la descripción',
    rooms: 2,
    bathrooms: 4,
    meters: 150,
    category: 'Casa Terrera'

  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
