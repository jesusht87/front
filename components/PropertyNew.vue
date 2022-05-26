<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="adminTitle">
          <h1>Crear Propiedad</h1>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="6" mb-10>
        <form>
          <v-select
            v-model="municipality"
            outlined
            multiple
            :options="[
              'Adeje',
              'Arafo',
              'Arico',
              'Arona',
              'Buenavista del Norte',
              'Candelaria',
              'El Rosario',
              'El Sauzal',
              'El Tanque',
              'Fasnia',
              'Garachico',
              'Granadilla de Abona',
              'Güímar',
              'Guía de Isora',
              'Icod de los Vinos',
              'La Guancha',
              'La Matanza de Acentejo',
              'La Orotava',
              'La Victoria de Acentejo',
              'Los Realejos',
              'Los Silos',
              'Puerto de la Cruz',
              'San Cristóbal de la Laguna',
              'San Juan de la Rambla',
              'San Miguel de Abona',
              'Santa Cruz de Tenerife',
              'Santa Úrsula',
              'Santiago del Teide',
              'Tacoronte',
              'Tegueste',
              'Vilaflor',
            ]"
          />

          <v-btn raised class="primary" @click="onPickFile">
            Seleccionar imagen
          </v-btn>
          <v-btn raised class="primary" @click="uploadImageFile">
            Subir imagen
          </v-btn>
          <input
            ref="imageFile"
            type="file"
            style="display: none"
            accept="image/*"
            @change="onFilePicked"
          >
          <img :src="imageUrl" height="150">
          <v-text-field v-model="title" label="Título" />

          <v-text-field v-model="price" label="Precio" />

          <v-text-field v-model="address" label="Dirección" />

          <v-text-field v-model="description" label="Descripción" />

          <v-text-field v-model="meters" label="Metros" required />

          <v-text-field v-model="bathrooms" label="Baños" />

          <v-text-field v-model="rooms" label="Habitaciones" />

          <v-text-field v-model="notes" label="Notas" />

          <v-btn class="mr-4" @click="submit">
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

export default {
  name: 'PropertyNew',
  data: () => ({
    title: '',
    price: '',
    address: '',
    municipality: '',
    description: '',
    meters: '',
    bathrooms: '',
    rooms: '',
    notes: '',
    imageUrl: '',
    imageFile: null
  }),
  methods: {
    async submit () {
      try {
        await this.$axios
          .post('/property', {
            title: this.title,
            price: this.price,
            address: this.address,
            municipality: this.municipality,
            description: this.description,
            meters: this.meters,
            bathrooms: this.bathrooms,
            rooms: this.rooms,
            notes: this.notes,
            photos: this.imageUrl
          })
          .then(confirm('Propiedad creada con éxito'))
        this.clear()
      } catch (err) {}
    },
    onPickFile () {
      this.$refs.imageFile.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      const filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Por favor, escoge un formato válido de imagen.')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.imageFile = files[0]
    },
    uploadImageFile (imageFile) {
      const file = this.imageFile

      const metadata = {
        contentType: file.type
      }

      // Create a reference to the destination where we're uploading the file.
      const storage = this.$fire.storage
      const imageRef = storage.ref(`images/${file.name}`)

      const uploadTask = imageRef
        .put(file, metadata)
        .then((snapshot) => {
          // Once the image is uploaded, obtain the download URL, which
          // is the publicly accessible URL of the image.
          return snapshot.ref.getDownloadURL().then((url) => {
            return url
          })
        })
        .catch((error) => {
          console.error('Error uploading image', error)
        })

      // When the upload ends, set the value of the image URL and signal that uploading is done.
      uploadTask.then((url) => {
        this.imageUrl = url
        window.alert('Imagen guardada')
      })
    },
    clear () {
      this.title = ''
      this.price = ''
      this.address = ''
      this.municipality = ''
      this.description = ''
      this.meters = ''
      this.bathrooms = ''
      this.rooms = ''
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
  background-image: url("@/assets/images/dash-titles.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  color: white;
}
</style>
