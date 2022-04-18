<template>
  <v-card
    width="256"
    tile
  >
    <v-navigation-drawer
      class="blue accent-4"
      dark
      permanent
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Contactos
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn block tile text to="/admin/contactlist">
        Ver todos
      </v-btn>

      <v-btn block tile text to="/admin/contactedit">
        Editar / Borrar
      </v-btn>

      <v-btn block tile text to="/admin/contactcreate">
        Nuevo
      </v-btn>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Propiedades
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn block tile text to="/admin/propertylist">
        Ver todas
      </v-btn>

      <v-btn block tile text to="/admin/propertyedit">
        Editar / Borrar
      </v-btn>

      <v-btn block tile text to="/admin/propertycreate">
        Nueva
      </v-btn>

      <template #append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardLeftMenu'
}
</script>

<style scoped>

</style>
