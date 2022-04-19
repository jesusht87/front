<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          ¡¡Bienvenid@!!
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="Introduce tu e-mail" />
            <v-text-field v-model="password" label="Introduce tu password" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="login()"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: 'reboot2@reboot.com',
      password: '1234'
    }
  },
  methods: {
    async login () {
      const response = await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      console.log(response)
    }
  }
}
</script>
