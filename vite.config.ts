import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const analyze = require('rollup-plugin-analyzer')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), analyze()]
})
