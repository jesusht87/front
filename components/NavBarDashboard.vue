<template>
  <v-toolbar elevation="0" height="100" class="pb-2">
    <img
      class="mt-4"
      :src="require('@/assets/images/navbar-logo.png')"
      height="100px"
    >
    <v-spacer />
    <v-btn to="/dashBoard" class="dashNavBarReturnBtn">
      ⏎ Volver
    </v-btn>

    <v-menu
      transition="slide-y-transition"
      bottom
      class="dashAdminButtons"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="secondary"
          v-bind="attrs"
          v-on="on"
        >
          Propiedades
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/admin/propertycreate">
          Nueva Propiedad
        </v-list-item>
        <v-list-item to="/admin/propertyedit">
          Editar o Eliminar
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="secondary"
          v-bind="attrs"
          v-on="on"
        >
          Contactos
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/admin/contactcreate">
          Nuevo Contacto
        </v-list-item>

        <v-list-item to="/admin/contactedit">
          Editar o Eliminar
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBarDashboard'
}
</script>

<style scoped>
.dashNavBarReturnBtn {
  margin-right: 10px;
}
.dashAdminButtons {
  margin-right: 10px;
}
</style>
