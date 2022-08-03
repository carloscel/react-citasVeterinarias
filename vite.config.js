import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://carloscel.github.io/react-citasVeterinarias/",
  plugins: [react()]
})
