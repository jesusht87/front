<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title class="white--text blue darken-4">
      User Directory

      <v-spacer />

      <v-btn
        color="white"
        class="text--primary"
        fab
        small
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4">
      Para ver un contacto haga click en el icono de view user, para añadirlo, haga click en mas.
    </v-card-text>

    <v-divider />

    <v-virtual-scroll
      :items="items"
      :item-height="50"
      height="300"
    >
      <template #default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              :color="item.color"
              size="56"
              class="white--text"
            >
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              depressed
              small
            >
              View User

              <v-icon
                color="orange darken-4"
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  name: 'UserDirectory',
  data () {
    return {
      user: ''
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
