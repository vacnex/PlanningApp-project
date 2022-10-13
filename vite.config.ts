import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

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
          'vue-router':[
            'createRouter',
            'createWebHistory',
          ],
          //Store import
          // '@/stores/UserStore/UserAuthenticated': [
          //   'useUserAuthenticatedStore'
          // ],
          // '@/stores/LocaleStore/UserAuthenticated': [
          //   'useUserAuthenticatedStore'
          // ],
          //Vue-Use helper import
          '@vueuse/core': [
            'useDark',
            'useToggle'
          ],
          //Fetch library
          'axios': [
            ['default', 'axios'],
          ],
        }
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
      dirs: [
        './src/stores/**',
        './src/router',
        './src/composables/**'
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
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
    },
  },
});
