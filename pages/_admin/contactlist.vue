<template>
  <v-row>
    <v-col>
      <ContactList />
    </v-col>
  </v-row>
</template>

<script>
import ContactList from '../../components/ContactList.vue'
export default {
  name: 'ContactListPage',
  components: {
    ContactList
  },
  layout: 'dashboardlayout'
}
</script>
