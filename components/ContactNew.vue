<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Crear Contacto</h1>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="6" mb-10>
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Nombre"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />
          <v-text-field
            v-model="surname"
            :error-messages="surnameErrors"
            :counter="10"
            label="Apellidos"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          <v-text-field
            v-model="phone"
            :error-messages="phoneErrors"
            :counter="10"
            label="Teléfono"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />

          <v-text-field
            v-model="notes"
            :error-messages="notesErrors"
            :counter="10"
            label="Notas"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />

          <v-btn
            class="mr-4"
            @click="submit"
          >
            Registrar
          </v-btn>
          <v-btn @click="clear">
            Limpiar Campos
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'ContactNew',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },
  data: () => ({
    name: '',
    surname: '',
    email: '',
    phone: '',
    notes: ''
  }),
  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) { return errors }
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) { return errors }
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) { return errors }
      !this.$v.name.maxLength && errors.push('Name must be at most 3 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) { return errors }
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  methods: {
    async submit () {
      try {
        await this.$axios.post('/contact',
          {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            notes: this.notes
          }).then(confirm('Contacto creado con éxito'))
        this.clear()
      } catch (err) {
      }
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.email = ''
      this.phone = ''
      this.notes = ''
    }
  }
}
</script>

<style>
.adminTitle {
  padding: 15px;
  line-height: 30px;
  text-align: right;
  background-image: url('@/assets/images/dash-titles.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
</style>
