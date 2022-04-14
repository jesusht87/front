<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Editar Contacto</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="contact-list">
          <v-card-text>
            <v-list>
              <v-list-item-group
                multiple
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
                      small
                      color="blue"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </v-list-item-action>

                  <v-list-item-action>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="red"
                      @click="deleteContact(contact._id)"
                    >
                      <v-icon>
                        X
                      </v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactEditPage',
  layout: 'dashlayout',
  data () {
    return {
      contacts: ''
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
    }
  }
}
</script>

<style lang="scss" scoped>
.adminTitle {
  padding: 25px;
  line-height: 125px;
  text-align: center;
  background-image: url('@/assets/images/promo-results-header.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
</style>
