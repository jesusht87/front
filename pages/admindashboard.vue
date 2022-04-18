<template>
  <v-row>
    <v-col>
      <ContactList />
    </v-col>
  </v-row>
</template>

<script>
import ContactList from '../components/ContactList.vue'
export default {
  name: 'AdminDashboard',
  components: {
    ContactList
  },
  layout: 'dashboardlayout'
}
</script>
