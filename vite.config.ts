import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import {setDefaultResultOrder} from 'dns'
import {resolve} from "path";

setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
