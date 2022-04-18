<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
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

          <v-date-picker
            v-model="dateforthevisit"
            label="Fecha Preferida"
          />

          <v-btn
            class="mr-4"
            @click="submit()"
          >
            Registrar
          </v-btn>
          <v-btn @click="clear()">
            Limpiar Campos
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'PetitionNew',
  data: () => ({
    title: '',
    userId: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    dateforthevisit: ''
  }),
  methods: {
    async submit () {
      try {
        await this.$axios.post('/contact',
          {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone
          })
        // const userId = this.userId
        // const userId = response.data[0]._id
        await this.$axios.post('/petition',
          {
            property: this.propertyId,
            lead: this.userId,
            dateforthevisit: this.dateforthevisit
          }

        )

        this.clear()
      } catch (err) {
      }
    },
    clear () {
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
