<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center pa-0">
        <HomeHeroImage />
        <SearchHomeArea />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <div class="typerowright">
          <div class="displayleft">
            <h1>¡En Promoción!</h1>
            <p>Descubre la selección de propiedades que se encuentran en promoción, y hazte con el hogar de tus sueños por menos de lo que esperabas.</p>
            <v-btn
              to="promo"
            >
              Ver Propiedades
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeHeroImage from '../components/HomeHeroImage.vue'
import SearchHomeArea from '../components/SearchHomeArea.vue'

export default {
  name: 'IndexPage',
  components: { HomeHeroImage, SearchHomeArea },
  layout: 'default'
}
</script>

<style scoped>

.typerowright {
  background-image: url('@/assets/images/new-homes.jpg');
  background-position: center;
  background-size: cover;
  height: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  width: 100%;
  padding: 10%;
  margin-bottom: 25px;
  margin-top: 50px;
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
