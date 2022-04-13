<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <TodoWrapper />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoWrapper from '../components/TodoWrapper.vue'

export default {
  name: 'DashBoardPage',
  components: {
    TodoWrapper
  },
  layout: 'default'
}
</script>

<style scoped>

</style>
