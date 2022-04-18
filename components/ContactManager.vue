<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Editar Contacto</h1>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <h3>Contactos</h3>
        <v-card class="contact-list">
          <v-card-text>
            <v-list>
              <v-list-item-group
                active-class=""
              >
                <v-list-item v-for="(contact, idx) in contacts" :key="idx" :todo="contact">
                  <v-list-item-content>
                    <v-list-item-title>{{ contact.name }} {{ contact.surname }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="blue"
                      @click="editContact(contact._id)"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </v-list-item-action>

                  <v-list-item-action>
                    <v-btn
                      class="mx-2 delete-btn"
                      fab
                      dark
                      x-small
                      color="red"
                      @click="deleteContact(contact._id)"
                    >
                      X
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="edition" cols="6" mb-10>
        <h3>Editando {{ contactEdited.name }} {{ contactEdited.surname }}</h3>
        <form>
          <v-text-field
            v-model="contactEdited.name"
            :counter="3"
            label="Nombre"
          />
          <v-text-field
            v-model="contactEdited.surname"
            :counter="10"
            label="Apellidos"
          />
          <v-text-field
            v-model="contactEdited.email"
            label="E-mail"
          />
          <v-text-field
            v-model="contactEdited.phone"
            :counter="10"
            label="Teléfono"
          />

          <v-text-field
            v-model="contactEdited.notes"
            :counter="10"
            label="Notas"
          />
          <v-btn
            class="mr-4"
            red
            @click="edition = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            class="mr-4"
            @click="submit"
          >
            Registrar
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ContactManager',
  data () {
    return {
      contacts: '',
      contactEdited: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        notes: ''
      },
      edition: false
    }
  },
  async mounted () {
    const response = await this.$axios.get('/contact')
    this.contacts = response.data
  },
  methods: {
    async deleteContact (ContactId) {
      try {
        await this.$axios.delete('/contact/' + ContactId).then(confirm('Contacto eliminado con éxito'))
        const response = await this.$axios.get('/contact')
        this.contacts = response.data
      } catch (err) {
      }
    },
    async editContact (ContactId) {
      try {
        if (this.edition === true) {
          const response = await this.$axios.get('/contact/' + ContactId)
          this.contactEdited = response.data[0]
        } else {
          this.edition = true
          const response = await this.$axios.get('/contact/' + ContactId)
          this.contactEdited = response.data[0]
        }
      } catch (err) {
      }
    },
    async submit () {
      try {
        await this.$axios.put('/contact/' + this.contactEdited._id,
          {
            name: this.contactEdited.name,
            surname: this.contactEdited.surname,
            email: this.contactEdited.email,
            phone: this.contactEdited.phone,
            notes: this.contactEdited.notes
          }).then(confirm('Contacto modificado con éxito'))
        const response = await this.$axios.get('/contact')
        this.contacts = response.data
      } catch (err) {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
.delete-btn {
    padding: 0.5em 1em;
    background-color: #eccfc9;
    color: #c5391a;
    border: 2px solid #ea3f1b;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
