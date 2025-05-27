import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'font-awesome/css/font-awesome.css';
import vue3GoogleLogin from 'vue3-google-login'

// import { initializeApp } from 'firebase/app';
// import firebaseConfig from './config/firebase_config';

createApp(App).use(router).use(BootstrapVue3).use(vue3GoogleLogin, {
  clientId: '689183023842-2okkdh88brksrmsvjm9s0fnc6v7s05ld.apps.googleusercontent.com',
}).mount('#app')
// initializeApp(firebaseConfig.firebaseConfig);