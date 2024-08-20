// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// import { ExtendViteConfigOptions } from "@nuxt/kit"
// import moduleVite from "./src/module"

import { mergeConfig } from 'vite'
import { rollupOptions } from './extendVite.config'



export default defineNuxtConfig({

  ssr: false,
  // srcDir: 'src/',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  dir: {
    pages: 'src/pages',
    plugins: 'src/plugins',
  },
  components: [
    {
      path: 'src/components/common/buttons',
      prefix: "btn",
    },
    // importar automáticamente componentes basándose únicamente en su nombre
    {
      path: '~/src/components',
      pathPrefix: false,
    },

  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    // moduleVite,
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: [100, 300, 400, 500, 700, 900],

      }
      , display: 'swap'
    }],
    // '@nuxtjs/google-fonts',

    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
        config.build = mergeConfig(config.build as any, {
          rollupOptions
        });
      })
    },
    //...
  ],
  // googleFonts: {
  //   families: {
  //     Roboto: {
  //       wght: [100, 300, 400, 500, 700, 900] // Different weights of Roboto
  //     }
  //   },
  //   display: 'swap',
  // },

  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})