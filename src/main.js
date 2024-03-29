import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import App from './App.vue'
import router from './router'
// import PrimeVue from 'primevue/config' + ajouter app.use(PrimeVue)

import './assets/main.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
