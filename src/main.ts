import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createGtm } from '@gtm-support/vue-gtm';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(createGtm({
    id: 'GTM-PBNKVVKN',             // Your GTM ID
    enabled: true,                  // Set to false to disable tracking (e.g., in dev)
    debug: false,                   // Logs GTM events to console
    loadScript: true,               // Automatically injects the GTM script
    vueRouter: router,              // Required for automatic SPA page tracking
    trackOnNextTick: false          // Ensures page is fully rendered before tracking
}))

app.use(router)
app.use(pinia)

app.mount('#app')
