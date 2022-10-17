import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    ElementPlus(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        // 'vue-router',
        {
          'vue-router': [
            'createRouter',
            'createWebHistory',
          ],
          //Vue-Use helper import
          '@vueuse/core': [
            'useDark',
            'useToggle'
          ],
          //Fetch library
          //, 'AxiosInstance', 'AxiosRequestConfig', 'AxiosResponse'
          'axios': [
            ['default', 'axios']
          ],
        }
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
      dirs: [
        './src/stores/**',
        './src/router',
        './src/models',
        './src/helpers',
        './src/enums',
        './src/servies',
        './src/composables/**'
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      dirs: [
        'src/components',
        'src/views'
      ],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.ts$/],
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
    }),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~animate': path.resolve(__dirname, 'node_modules/animate.css/source'),
    },
  },
});
