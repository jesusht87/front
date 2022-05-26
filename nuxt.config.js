import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - front',
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL
  },

  // Firebase module configuration: https://firebase.nuxtjs.org/guide/getting-started
  firebase: {
    config: {
      apiKey: 'AIzaSyDxiqn0UBm1T06Hws3TGEkv6TcVsWeRj-U',
      authDomain: 'seaviewproperties-51a9d.firebaseapp.com',
      databaseURL: 'https://seaviewproperties-51a9d-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'seaviewproperties-51a9d',
      storageBucket: 'seaviewproperties-51a9d.appspot.com',
      messagingSenderId: '28587734568',
      appId: '1:28587734568:web:fb9851bd3150fd22cf271d',
      measurementId: 'G-89DVH0SYD3'
    },
    services: {
      storage: true
    }
  },

  env: {
    FIRE_ENV: process.env.FIRE_ENV
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/admindashboard'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: '',
          name: 'token'
        },
        user: {
          property: '',
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            property: 'token'
          },
          user: {
            url: '/auth/me',
            method: 'get'
          }
        }
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.grey.darken2,
          accent: colors.grey.lighten5,
          secondary: colors.blue.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
