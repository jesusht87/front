<template>
  <v-row>
    <v-col>
      <TodoList />
      <TodoCreate @task-added="getTodos()" />
    </v-col>
  </v-row>
</template>

<script>
import TodoList from './TodoList.vue'
import TodoCreate from './TodoCreate.vue'
export default {
  name: 'TodoWrapper',
  components: {
    TodoList,
    TodoCreate
  },
  data () {
    return {

    }
  },
  methods: {
    async getTodos () {
      const response = await this.$axios.get('/todo')
      this.todos = response.data
    }
  }
}
</script>
