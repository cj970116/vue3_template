/*
 * @Author: cjee
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  alias: {
    '@': resolve(__dirname, './src')
  },
  server: {
    open: false,
    https: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://',
    //     changeOrigin: true,
    //     ws: false,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
    hmr: {
      overlay: true
    }
  },

  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },

    // TODO: 拆分
    rollupOptions: {
      output: {
        manualChunks: {}
      }
    },

    chunkSizeWarningLimit: 800 // FIXME: 鸵鸟 = =...
  },

  plugins: [vue()]
})
