import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installPinia from './store'
import './style/index.css'

const app = createApp(App)

app.use(router)

app.use(installPinia)

router.isReady().then(() => {
  app.mount('#app')
})
