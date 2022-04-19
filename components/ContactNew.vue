<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Crear Contacto</h1>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="6" mb-10>
        <form>
          <v-text-field
            v-model="name"
            label="Nombre"
            required
          />
          <v-text-field
            v-model="surname"
            label="Apellidos"
            required
          />
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          />
          <v-text-field
            v-model="phone"
            label="Teléfono"
            required
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
  name: 'ContactNew',
  data: () => ({
    name: '',
    surname: '',
    email: '',
    phone: '',
    notes: ''
  }),
  methods: {
    async submit () {
      try {
        await this.$axios.post('/contact',
          {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            notes: this.notes
          }).then(confirm('Contacto creado con éxito'))
        this.clear()
      } catch (err) {
      }
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.email = ''
      this.phone = ''
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
