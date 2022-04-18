<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Crear Propiedad</h1>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="6" mb-10>
        <form>
          <v-text-field
            v-model="title"
            label="Título"
          />

          <v-text-field
            v-model="price"
            label="Precio"
          />

          <v-text-field
            v-model="address"
            label="Dirección"
          />
          <v-text-field
            v-model="description"
            label="Descripción"
          />

          <v-text-field
            v-model="meters"
            label="Metros"
            required
          />

          <v-text-field
            v-model="bathrooms"
            label="Baños"
          />

          <v-text-field
            v-model="rooms"
            label="Habitaciones"
          />

          <v-text-field
            v-model="notes"
            label="Notas"
          />

          <v-btn
            class="mr-4"
            @click="submit"
          >
            Registrar
          </v-btn>
          <v-btn @click="clear">
            Limpiar Campos
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'PropertyNew',
  data: () => ({
    title: '',
    price: '',
    address: '',
    description: '',
    meters: '',
    bathrooms: '',
    rooms: '',
    notes: ''
  }),
  methods: {
    async submit () {
      try {
        await this.$axios.post('/property',
          {
            title: this.title,
            price: this.price,
            address: this.address,
            description: this.description,
            meters: this.meters,
            bathrooms: this.bathrooms,
            rooms: this.rooms,
            notes: this.notes
          }).then(confirm('Propiedad creada con éxito'))
        this.clear()
      } catch (err) {
      }
    },
    clear () {
      this.title = ''
      this.price = ''
      this.address = ''
      this.description = ''
      this.meters = ''
      this.bathrooms = ''
      this.rooms = ''
      this.notes = ''
    }
  }
}
</script>

<style>
.adminTitle {
  padding: 15px;
  line-height: 30px;
  text-align: right;
  background-image: url('@/assets/images/dash-titles.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
</style>
