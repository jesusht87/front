<template>
  <v-card
    class="mx-auto my-12"
    max-width="380"
    height="660"
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
      :src="house.photos"
    />

    <v-card-title>{{ house.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      />

      <div class="my-4 text-subtitle-1">
        {{ house.price }} • {{ house.municipality }}
      </div>

      <div>{{ house.description }}</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-text><b>Principales Características</b></v-card-text>

    <v-card-text>
      <ul>
        <li>Habitaciones: {{ house.rooms }}.</li>
        <li>Baños: {{ house.bathrooms }}.</li>
        <li>Metros útiles: {{ house.meters }} m2.</li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="visitar()"
      >
        Solicitar Visita
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PropertyCard',
  props: {
    house: {
      type: Object,
      default: () => ({

      })
    }
  },
  methods: {
    visitar () {
      window.location.href = '/petition/?petitionId=' + this.house._id
    }
  }
}
</script>
