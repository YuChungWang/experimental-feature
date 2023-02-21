import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    // VueMacros({
    //   plugins: {
    //     vue: Vue(),
    //     // vueJsx: VueJsx(), // if needed
    //   },
    // }),
  ],
})
