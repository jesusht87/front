<template>
  <v-card width="50%" class="SearchHomeArea" color="white">
    <v-card-title>
      <h3>Busca aquí tu casa</h3>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-select v-model="selected" outlined multiple />
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="selected" outlined multiple />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn elevation="2" color="primary">
        Buscar
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
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
</style>
