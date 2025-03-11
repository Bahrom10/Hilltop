import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
