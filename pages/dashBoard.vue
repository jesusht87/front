<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center pa-0">
        <ListTodos />
        <FormCreateTask />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListTodos from '../components/ListTodos.vue'
import FormCreateTask from '../components/FormCreateTask.vue'

export default {
  name: 'DashBoardPage',
  components: { ListTodos, FormCreateTask },
  layout: 'default'
}
</script>
