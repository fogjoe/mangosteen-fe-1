import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    define:
      command === 'build'
        ? {
            DEBUG: false
          }
        : {
            DEBUG: true
          },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: any) {
            if (id.includes('echarts')) {
              return 'echarts'
            }
            if (id.includes('mock') || id.includes('faker')) {
              return 'mock'
            }
            if (id.includes('vant')) {
              return 'vant'
            }
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true
      }),
      svgstore(),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    server: {
      // host: "0.0.0.0",
      // port: 3000,
      // disableHostCheck: true,
      proxy: {
        '/api/v1': {
          target: 'http://119.13.81.176:3000/'
        }
      }
    }
  }
})
