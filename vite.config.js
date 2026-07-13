import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub project pages are served from /<repository-name>/.
  // Keep the dev server at / while generating production asset URLs for Pages.
  base: command === 'build' ? '/my-portfolio/' : '/',
  plugins: [react()],
}))
