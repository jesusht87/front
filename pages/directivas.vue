<template>
  <div>
    <p>
      Nombre:
    </p>
    <input v-model="nombreaqui" type="text">
    <p>
      {{ nombreaqui }} Al revés sería: {{ nameReverser }}
    </p>
  </div>
</template>

<script>
export default {

  name: 'DirectivasPage',
  data () {
    return {
      nombreaqui: ''

    }
  },
  computed: {
    nameReverser () {
      return this.nombreaqui.split('').reverse('').join('')
    }
  }
}
</script>
