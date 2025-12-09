import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use repository name exactly (case-sensitive) so GitHub Pages serves assets correctly
  base: '/myortfolio/',
  plugins: [react()],
})
