<template>
  <v-row>
    <v-col>
      <div class="header">
        <h1>Conócenos</h1>
      </div>
      <div class="text-center">
        <h2>¡Hola! Somos MyState Tenerife</h2>
        <p>
          MyState ofrece a todos sus clientes un servicio personalizado y
          altamente cualificado en la gestión y asesoramiento inmobiliario.
        </p>

        <p>Nuestra especialidad: el trato personalizado.</p>

        <p>
          Nuestro objetivo es cubrir las necesidades de nuestros clientes,
          basándonos siempre en nuestra experiencia y saber hacer. Viviendas de
          todo tipo, locales comerciales e incluso naves industriales: lo que
          necesites en la isla de Tenerife, está a nuestro alcance para ayudarte
          con tu proyecto. ¿Comenzamos?
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.header {
  padding: 25px;
  line-height: 125px;
  text-align: center;
  background-image: url("@/assets/images/search-results-header.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
.text-center {
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 25px;
}
</style>
