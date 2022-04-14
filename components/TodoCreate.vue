<template>
  <v-card>
    <v-card-title>Nueva Tarea</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="task" label="Escribe aquí tu tarea" @keypress.enter="addTask" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="addTask">
        Crear
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TodoCreate',
  data () {
    return {
      task: ''
    }
  },
  methods: {
    async addTask () {
      try {
        await this.$axios.post('/todo',
          {
            title: this.task
          }).then(function () {
        })
      } catch (err) {
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
