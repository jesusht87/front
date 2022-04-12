<template>
  <v-container fluid fill-height>
    <v-divider />
    <v-row id="todo-list">
      <v-col cols="6">
        <ListTodos />
      </v-col>
      <v-spacer />
      <v-col cols="4">
        <UserDirectoryCard />
      </v-col>
    </v-row>
    <v-row align="end">
      <v-col cols="4">
        <FormCreateTask @task-added="getTodos()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'DashBoardPage',
  layout: 'default'
}
</script>

<style scoped>

</style>
