<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="contactResultsTitle">
          <h1>Todos los Contactos</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(contact, idx) in contacts" :key="idx" cols="12" md="3">
        <ContactCard :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactCard from '../components/ContactCard.vue'
export default {
  name: 'ContactList',
  components: {
    ContactCard
  },
  data () {
    return {
      contacts: []
    }
  },
  async mounted () {
    const response = await this.$axios.get('/contact')
    this.contacts = response.data
  }
}
</script>

<style scoped>
.contactResultsTitle {
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
.contactResults {
  padding: 10px;
}

</style>
