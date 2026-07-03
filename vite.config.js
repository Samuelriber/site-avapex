import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: parseInt(process.env.PORT) || 5173,
    proxy: {
      '/send-email.php': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})