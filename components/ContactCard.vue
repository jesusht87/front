<template>
  <v-card
    class="mx-auto"
    color="blue"
    dark
    max-width="400"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light">{{ contact.name }} {{ contact.surname }}</span>
    </v-card-title>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        to="/admin/contactedit"
      >
        Editar
      </v-btn>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        Ver más
      </v-btn>

      <v-spacer />

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          <ul>
            <li>Teléfono: {{ contact.phone }}</li>
            <li>Correo: {{ contact.mail }}</li>
          </ul>
        </v-card-text>
        <v-card-text>
          {{ contact.notes }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    contact: {
      type: Object,
      default: () => ({

      })
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
