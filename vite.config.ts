import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vuetify(),
    dts({
      include: resolve(__dirname, './packages'),
      tsConfigFilePath: resolve(__dirname, './tsconfig.app.json')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        index: resolve(__dirname, './packages/index.ts')
      },
      formats: ['es']
    },
    minify: true,
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: {
        chunkFileNames: 'common/[name].js',
        entryFileNames: (file) => {
          if (file.name == 'index') {
            return 'index.js'
          } else {
            return '[name]/index.js'
          }
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
