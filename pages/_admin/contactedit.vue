<template>
  <v-row>
    <v-col>
      <ContactManager />
    </v-col>
  </v-row>
</template>

<script>
import ContactManager from '../../components/ContactManager.vue'
export default {
  name: 'ContactEdit',
  components: {
    ContactManager
  },
  layout: 'dashboardlayout'
}
</script>
