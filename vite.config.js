// vite.config.js

import { defineConfig } from 'vite';
// Debes importar 'path' para poder trabajar con rutas de archivos
import path from 'path'; 
import react from '@vitejs/plugin-react'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esta línea mapea el alias '@' a la carpeta 'src'
      '@': path.resolve(__dirname, './src'), 
    },
  },
});