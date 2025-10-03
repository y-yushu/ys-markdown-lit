import type { App } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

export { pinia }

export default {
  install(app: App) {
    app.use(pinia)
  }
}
