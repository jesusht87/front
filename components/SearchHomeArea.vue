<template>
  <v-card width="50%" class="SearchHomeArea" color="white">
    <v-form>
      <v-card-title>
        <h3 class="searchtitle">
          Busca ahora
        </h3>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="municipality"
                outlined
                multiple
                :options="[
                  'Adeje',
                  'Arafo',
                  'Arico',
                  'Arona',
                  'Buenavista del Norte',
                  'Candelaria',
                  'El Rosario',
                  'El Sauzal',
                  'El Tanque',
                  'Fasnia',
                  'Garachico',
                  'Granadilla de Abona',
                  'Güímar',
                  'Guía de Isora',
                  'Icod de los Vinos',
                  'La Guancha',
                  'La Matanza de Acentejo',
                  'La Orotava',
                  'La Victoria de Acentejo',
                  'Los Realejos',
                  'Los Silos',
                  'Puerto de la Cruz',
                  'San Cristóbal De La Laguna',
                  'San Juan de la Rambla',
                  'San Miguel de Abona',
                  'Santa Cruz de Tenerife',
                  'Santa Úrsula',
                  'Santiago del Teide',
                  'Tacoronte',
                  'Tegueste',
                  'Vilaflor',
                ]"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="category"
                outlined
                multiple
                :options="[
                  'Vivienda',
                  'Local Comercial',
                  'Nave Industrial',
                ]"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn elevation="2" color="primary" @click="submit()">
          Buscar
        </v-btn>
        <v-btn elevation="2" color="primary" to="search">
          Ver todo
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      municipality: '',
      category: ''
    }
  },
  methods: {
    submit () {
      this.$router.push('/results?municipality=' + this.municipality)
    }
  }
}
</script>

<style>
.SearchHomeArea {
  height: auto;
  margin: 0 auto;
  margin-top: -50px;
}
.searchtitle {
  margin: 0 auto;
}
</style>
