<template>
  <v-row>
    <v-col>
      <ContactNew />
    </v-col>
  </v-row>
</template>

<script>
import ContactNew from '../../components/ContactNew.vue'
export default {
  name: 'ContactNewPage',
  components: {
    ContactNew
  },
  layout: 'dashboardlayout'
}
</script>
