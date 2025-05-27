import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'font-awesome/css/font-awesome.css'
import vue3GoogleLogin from 'vue3-google-login'

// Lee el client id desde las variables de entorno
const googleClientId = process.env.VUE_APP_GOOGLE_CLIENT_ID

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(vue3GoogleLogin, {
    clientId: googleClientId,
  })
  .mount('#app')