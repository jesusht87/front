<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <div class="typerowleft">
          <div class="displayright">
            <h1>Viviendas</h1>
            <p>Ya se trate de casas unifamiliares, chalets, casas rústicas o pisos, en MyState ponemos a tu disposición un amplio catálogo de viviendas, y te ayudamos a encontrar la financiación necesaria si es tu caso.</p>
            <v-btn
              to="search"
            >
              Ver ahora
            </v-btn>
          </div>
        </div>
        <div class="typerowright">
          <div class="displayleft">
            <h1>Locales Comerciales</h1>
            <p>Todos los sueños necesitan un lugar. Y nuestra especialidad, es conseguir el tuyo, para que tu negocio despegue con todo el éxito que te mereces. También en estos casos, te asesoramos a la hora de escoger la mejor financiación, para que el comienzo de tu aventura empresarial sea en las mejores condiciones.</p>
            <v-btn
              to="search"
            >
              Ver propiedades
            </v-btn>
          </div>
        </div>
        <div class="typerowthird">
          <div class="displayright">
            <h1>Naves Industriales</h1>
            <p>Una industria necesita un lugar perfecto y adecuado a su negocio. La localización ideal, puede ser la diferencia entre el éxito y el fracaso, y nuestra garantía, es lograr el éxito contigo. Disponemos de propiedades cerca de vías de comunicación, zonas portuarias, y zonas aeroportuarias. Consúltanos todas las opciones disponibles, sin compromiso.</p>
            <v-btn
              to="search"
            >
              Ver propiedades
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CategoriesPage'
}
</script>

<style scoped>
.typerowleft {
  background-image: url('@/assets/images/generic-bg-homes-1.jpg');
  background-position: center;
  height: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  width: 100%;
  padding: 10%;
  margin-bottom: 25px;
}
.typerowright {
  background-image: url('@/assets/images/generic-bg-homes-2.jpg');
  background-position: center;
  height: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  width: 100%;
  padding: 10%;
  margin-bottom: 25px;
}
.typerowthird {
  background-image: url('@/assets/images/generic-bg-homes-3.jpg');
  background-position: center;
  height: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  width: 100%;
  padding: 10%;
  margin-bottom: 25px;
}
.displayright{
  color: white;
  text-align: right;
  width: 50%;
  background-color: rgba(192, 104, 0, 0.45);
  padding: 15px;
  border-radius: 5px;
}
.displayleft{
  color: white;
  text-align: left;
  width: 50%;
  background-color: rgba(192, 104, 0, 0.45);
  padding: 15px;
  border-radius: 5px;

}
</style>
