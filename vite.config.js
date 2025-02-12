import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import lit from 'vite-plugin-lit'

export default defineConfig({
  plugins: [lit(), tailwindcss()]
})
