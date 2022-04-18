<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Editar Propiedad</h1>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <h3>Propiedades</h3>
        <v-card class="contact-list">
          <v-card-text>
            <v-list>
              <v-list-item-group
                active-class=""
              >
                <v-list-item v-for="(property, idx) in properties" :key="idx" :todo="property">
                  <v-list-item-content>
                    <v-list-item-title>{{ property.title }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="blue"
                      @click="editProperty(property._id)"
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
                      @click="deleteProperty(property._id)"
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
        <h3>Editando {{ propertyEdited.title }}</h3>
        <form>
          <v-text-field
            v-model="propertyEdited.title"
            label="Título"
          />
          <v-text-field
            v-model="propertyEdited.address"
            label="Dirección"
          />
          <v-text-field
            v-model="propertyEdited.description"
            label="Descripción"
          />
          <v-text-field
            v-model="propertyEdited.meters"
            label="Metros"
          />

          <v-text-field
            v-model="propertyEdited.bathrooms"
            label="Baños"
          />

          <v-text-field
            v-model="propertyEdited.rooms"
            label="Habitaciones"
          />

          <v-text-field
            v-model="propertyEdited.notes"
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
  name: 'PropertyManager',
  data () {
    return {
      properties: '',
      propertyEdited: {
        title: '',
        address: '',
        description: '',
        meters: '',
        bathrooms: '',
        rooms: '',
        notes: ''
      },
      edition: false
    }
  },
  async mounted () {
    const response = await this.$axios.get('/property')
    this.properties = response.data
  },
  methods: {
    async deleteProperty (PropertyId) {
      try {
        await this.$axios.delete('/property/' + PropertyId).then(confirm('Propiedad eliminada con éxito'))
        const response = await this.$axios.get('/property')
        this.properties = response.data
      } catch (err) {
      }
    },
    async editProperty (PropertyId) {
      try {
        if (this.edition === true) {
          const response = await this.$axios.get('/property/' + PropertyId)
          this.propertyEdited = response.data[0]
        } else {
          this.edition = true
          const response = await this.$axios.get('/property/' + PropertyId)
          this.propertyEdited = response.data[0]
        }
      } catch (err) {
      }
    },
    async submit () {
      try {
        await this.$axios.put('/property/' + this.propertyEdited._id,
          {
            title: this.propertyEdited.title,
            address: this.propertyEdited.address,
            description: this.propertyEdited.description,
            meters: this.propertyEdited.meters,
            bathrooms: this.propertyEdited.bathrooms,
            rooms: this.propertyEdited.rooms,
            notes: this.propertyEdited.notes
          }).then(confirm('Propiedad modificada con éxito'))
        const response = await this.$axios.get('/property')
        this.properties = response.data
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
