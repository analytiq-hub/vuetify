import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
       variant: "outlined"
    },
    VTextField: {
        variant: "outlined"
    }
  },
  theme: {
    defaultTheme: "light"
  }
})

app.use(router)
app.use(vuetify)

app.mount('#app')
